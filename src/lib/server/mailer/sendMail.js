// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import nodemailer from 'nodemailer';
import brevoTransport from 'nodemailer-brevo-transport';
import { BREVO_EMAIL_FROM, BREVO_EMAIL_TO, BREVO_API_KEY } from '$env/static/private';

const okRespBody = 'Твоето съобщение бе изпратено 😀';
const badRespBody = 'Не успяхме да изпратим 😯 опитайте отново';

const transporter = nodemailer.createTransport(
	new brevoTransport({
		apiKey: BREVO_API_KEY
	})
);

export async function mailPost(request) {
	const { email, msg, terms } = request.body;

	const html = `<h4>From Nodemailer</h4><h5>Sender: ${email}</h5><p><pre>${msg}</pre></p><p>Was the terms accepted: ${terms ? 'true' : 'false'}</p>`;

	// Configure your mail options
	const mailOptions = {
		from: BREVO_EMAIL_FROM, // Sender's email
		to: BREVO_EMAIL_TO, // Replace with your email
		subject: `Chefos Cleaning website contact form`, // Subject
		html: html, // HTML body content
		text: `From: ${email} \nContent: ${msg}. \nWas terms accepted: ${terms}` // plain text body content
	};

	// Attempt to send the email
	try {
		await transporter.sendMail(mailOptions);
		console.log('Nodemailer - email was send');
		return {
			status: 200,
			body: okRespBody
		};
	} catch (error) {
		console.error('Nodemailer - sending error:', error);
		return {
			status: 500,
			body: badRespBody
		};
	}
}
