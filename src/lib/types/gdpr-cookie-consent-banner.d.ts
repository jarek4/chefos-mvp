declare module '@beyonk/gdpr-cookie-consent-banner' {
	import { SvelteComponent } from 'svelte';

	interface BannerChoices {
		necessary: { label: string; description: string; value: boolean };
		analytics: { label: string; description: string; value: boolean };
		marketing: { label: string; description: string; value: boolean };
		tracking: { label: string; description: string; value: boolean };
	}

	interface GdprBannerProps {
		cookieName: string;
		description: string;
		acceptSelectedLabel: string;
		acceptAllLabel: string;
		rejectLabel: string;
		settingsLabel: string;
		closeLabel: string;
		editLabel: string;
		heading: string;
		choices: BannerChoices;
	}

	export default class GdprBanner extends SvelteComponent<GdprBannerProps> {}
}
