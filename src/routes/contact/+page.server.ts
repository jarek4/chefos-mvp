import type { Actions, PageServerLoad } from './$types';
// superforms:
import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
// valibot:
import { valibot } from 'sveltekit-superforms/adapters';
import { schema } from './schema';
// nodemailer:
import { mailPost } from '$lib/server/mailer/sendMail';
import {
	TURNSTILE_SITE_KEY,
	TURNSTILE_SECRET_KEY,
	DEV_TURNSTILE_SITE_KEY,
	DEV_TURNSTILE_SECRET_KEY
} from '$env/static/private';
import { APP_ENV, APP_ENV_PROD } from '$lib/utils/constants';

const isProdEnv = APP_ENV === APP_ENV_PROD;

const secretK = isProdEnv ? TURNSTILE_SECRET_KEY : DEV_TURNSTILE_SECRET_KEY;
const sitetK = isProdEnv ? TURNSTILE_SITE_KEY : DEV_TURNSTILE_SITE_KEY;

// CF Turnstile - Svelte Turnstile
interface TurnstileResponse {
	success: boolean;
	'error-codes'?: string[];
}
const turnstileError =
	'Проблем с reCAPTCHA. Моля, опреснете страницата или опитайте отново малко по-късно (ако проблемът продължава, проверете настройките на браузъра си).';

async function validateTurnstile(token: string): Promise<TurnstileResponse> {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ response: token, secret: secretK })
	});
	// await new Promise((resolve) => setTimeout(resolve, 3000));

	return (await response.json()) as TurnstileResponse; // Type assertion for clarity
}

export const load: PageServerLoad = async ({ url }) => ({
	metaData: {
		currentUrl: url.href,
		orginUrl: url.origin,
		path: url.pathname,
		description:
			'Тук ще намериш данните за връзката с нас. Попълни формата за контакт и ние ще се свържем с Теб възможно най-скоро.',
		title: 'Контакт',
		type: 'article'
	},
	// Always return { form } in load functions
	form: await superValidate(valibot(schema)),
	// turnstileSiteKey: process.env.TURNSTILE_SITE_KEY
	turnstileSiteKey: sitetK
});

export const actions: Actions = {
	sendemail: async ({ cookies, request }) => {
		const form = await superValidate(request, valibot(schema));
		// const token = form.data.cfTurnstileResponse;
		const { success } = await validateTurnstile(form.data.cfTurnstileResponse);

		// CF Turnstile error
		if (!success) {
			return message(form, turnstileError, { status: 403 });
		}

		const submissionCookieName = 'contactF-submissions';

		// const submissions = parseInt(cookies.get('contact-form-submitions') ?? '0') || 0;
		const submissions = Number(cookies.get(submissionCookieName) ?? '0') || 0;

		// SubmissionCookie value = submitions[max 5], expire= 10 || 30min;
		// At the first submit submissions = 0
		// User can submit form 4x whitin 10 min, without throttling
		// after 1x (submissions=1, SubmissionCookie=1, exp= 10min)
		// after 2x (submissions=2, SubmissionCookie=2, exp= 10min)
		// after 4x there is throttling 10 min
		// after 5x (submissions=4, SubmissionCookie=4, exp= 30min)
		const expirationMinutes = submissions <= 4 ? 10 : 30;
		const expirationMs = expirationMinutes * 60 * 1000;

		if (submissions > 3) {
			const empty = {
				id: form.id,
				valid: false,
				posted: false,
				errors: {},
				data: {
					msg: '',
					email: '',
					terms: form.data.terms,
					cfTurnstileResponse: '',
					throttling: submissions < 5 ? 10 : 30
				}
			};
			// Please wait ${expirationMinutes} minutes before submitting again.
			return message(
				empty,
				`Не изпратено! За да изпратиш отново изчакай около ${expirationMinutes} мин.`,
				{
					status: 403
				}
			);
		}

		if (!form.valid) {
			return fail(422, { form });
		}

		// Brevo:
		const response = await mailPost({
			body: {
				email: form.data.email,
				msg: form.data.msg,
				terms: form.data.terms
			}
		});

		// const response = { status: 200, body: 'posted Success ' };

		if (response.status === 200) {
			const newSubmissionCount = submissions <= 5 ? submissions + 1 : 0;

			cookies.set(submissionCookieName, newSubmissionCount.toString(), {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				//process.env.NODE_ENV === 'production' - Secure in production
				secure: isProdEnv ? true : false,
				maxAge: expirationMs / 1000, // in seconds
				expires: new Date(Date.now() + expirationMs)
			});

			return message(form, response.body);
		}

		return message(form, response.body, { status: 406 }); // actual response status
	}
};
