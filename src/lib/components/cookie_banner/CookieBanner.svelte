<script lang="ts">
	import './cookie-banner.css';
	import { onMount } from 'svelte';

	import GdprBanner from '@beyonk/gdpr-cookie-consent-banner';

	import { GDPR_COOKIE_NAME } from '$constants';
	import { browser } from '$app/environment';

	interface BannerChoices {
		necessary: { label: string; description: string; value: boolean };
		analytics: { label: string; description: string; value: boolean };
		marketing: { label: string; description: string; value: boolean };
		tracking: { label: string; description: string; value: boolean };
	}
	interface ConsentCookie {
		choices: ConsentChoices;
	}
	interface ConsentChoices {
		necessary: boolean;
		analytics: boolean;
		marketing: boolean;
		tracking: boolean;
	}

	const gdprBannerDescription =
		'За да осигурим по-голямо удобство на потребителите, използваме „бисквитки“ и други подобни технологии. Продължавайки, вие се съгласявате с условията.';

	const choices: BannerChoices = {
		necessary: {
			label: 'Необходими бисквитки',
			description:
				'Осигуряват основни функции на уебсайта като сигурност и управление на сесията. Тези бисквитки са задължителни за правилната работа на сайта.',
			value: true
		},
		analytics: {
			label: 'Аналитични бисквитки',
			description:
				'Помагат за събиране на данни за поведението на потребителите на сайта, за да се подобри функционалността и съдържанието на уебсайта. Те са полезни за разбирането на предпочитанията на потребителите.',
			value: true
		},
		marketing: {
			label: 'Маркетингови бисквитки',
			description:
				'Проследяват активността на потребителите с цел персонализиране на реклами и оферти. Те се използват за насочено рекламиране, което отговаря на интересите на потребителите.',
			value: true
		},
		tracking: {
			label: 'Бисквитки за проследяване',
			description:
				'Използват се за наблюдение на активността на потребителите в различни уебсайтове с цел събиране на данни за предпочитания и поведение. Тези данни помагат за по-прецизно насочване на реклами и създаване на персонализирано съдържание.',
			value: false
		}
	};
	const defaultConsentChoices: ConsentChoices = {
		necessary: true,
		analytics: false,
		marketing: false,
		tracking: false
	};

	const defaultCc: ConsentCookie = {
		choices: defaultConsentChoices
	};

	const handleAccept = () => {
		const c1 = readCookie();
		if (!c1) {
			updateGtm({
				choices: defaultConsentChoices
			});
			return;
		}
		updateGtm({
			choices: c1.choices
		});
	};
	function updateGtm(cc: ConsentCookie): void {
		window.dataLayer = window.dataLayer || [];
		function gtag(...args: any[]): void {
			window.dataLayer.push(arguments);
		}
		gtag('consent', 'update', {
			ad_storage: cc.choices.marketing == true ? 'granted' : 'denied',
			ad_user_data: cc.choices.marketing == true ? 'granted' : 'denied',
			ad_personalization: cc.choices.marketing == true ? 'granted' : 'denied',
			analytics_storage: cc.choices.analytics == true ? 'granted' : 'denied',
			functionality_storage: cc.choices.analytics == true ? 'granted' : 'denied',
			personalization_storage: cc.choices.tracking == true ? 'granted' : 'denied',
			security_storage: 'granted'
		});
		// console.log('function initAnalytics window.dataLayer:', window?.dataLayer);
	}

	// Load GTM script only if consent is given (or based on stored consent)
	onMount(() => {
		if (window) {
			const consentCookie = readCookie();
			if (consentCookie) updateGtm(consentCookie);
		}
	});

	function readCookie(): ConsentCookie | null {
		let c: ConsentCookie | null = null;
		if (browser) {
			const cookie = document.cookie
				.split('; ')
				.find((row) => row.startsWith(GDPR_COOKIE_NAME + '='));
			if (cookie) {
				c = decode(cookie ?? '');
				// console.log('readCookie c: ', c);
			}
		}
		return c;
	}

	function decode(v: string) {
		// 1. Decode the URL-encoded string
		let dv = decodeURIComponent(v);
		// chefosCleanGdpr={
		// 	choices: {
		// 		necessary: 'true',
		// 		tracking: 'true',
		// 		analytics: 'true',
		// 		marketing: 'true'
		// 	}
		// };

		// Removes "chefosCleanGdpr=" from the beginning
		let regex = new RegExp(`^${GDPR_COOKIE_NAME}=`);
		let decodedValue = dv.replace(regex, '');

		// 3. Parse the JSON string into an object
		let jsonObject: ConsentCookie = JSON.parse(JSON.stringify(defaultCc));

		try {
			jsonObject = JSON.parse(decodedValue);
		} catch (e) {
			console.error('decoded Invalid JSON:');
			return jsonObject;
		}
		return jsonObject;
	}
</script>

<GdprBanner
	cookieName={GDPR_COOKIE_NAME}
	description={gdprBannerDescription}
	acceptSelectedLabel="Приеми избрани"
	acceptAllLabel="Приеми"
	rejectLabel="Откажи"
	settingsLabel="Персонализиране"
	closeLabel="Затвори този прозорец"
	editLabel="Промени"
	heading="Настройки за поверителност"
	{choices}
	on:necessary={handleAccept}
></GdprBanner>
