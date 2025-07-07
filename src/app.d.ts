// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		dataLayer: IArguments[];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		gtag?: (...args: any[]) => void;
	}
	declare module '@beyonk/gdpr-cookie-consent-banner';
	declare module 'nodemailer';
}

export {};
