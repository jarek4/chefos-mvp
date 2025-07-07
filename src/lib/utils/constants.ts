// #### #### #### #### #### ####
// ####  ENVIRONMENT:
// #### #### #### #### #### ####
export const APP_ENV_DEV: 'dev' | 'dev' = 'dev';
export const APP_ENV_PROD: 'prod' | 'prod' = 'prod';
export const APP_ENV: 'dev' | 'prod' = 'prod'; //APP_ENV_DEV | APP_ENV_PROD
export const PROD_BASE_URL: string = 'https://chefoscleaning.com';
export const DEV_BASE_URL: string = 'http://localhost:5173';

// #### #### #### #### #### ####
// ####  APP data:
// #### #### #### #### #### ####
export const SITE_NAME: string = 'Chefo`s Cleaning';
export const APP_NAME: string = 'chefos-cleaning';
export const GDPR_COOKIE_NAME: string = `${APP_NAME}_gdpr`;
export const HOME_TITLE: string = `${SITE_NAME} <br/> Варна`;
export const HERO_TAGLINE: string = 'Професионално почистване';
export const LOGO_SVG_PATH: string = '$lib/assets/img/chefos_logo_1.svg';

export const DEV_CSP_CONTENT: string =
	"default-src 'self'; script-src 'self' 'unsafe-inline' http: http://localhost:5173 http://192.168.50.10 https://challenges.cloudflare.com https://www.googletagmanager.com https://scripts.simpleanalyticscdn.com/latest.js https://queue.simpleanalyticscdn.com; style-src 'self' 'unsafe-inline' http: https://4forin-593620436.imgix.net; img-src 'self' data: https://4forin-593620436.imgix.net https://images.unsplash.com http://www.w3.org/2000/svg http://www.w3.org/1999/xlink https://queue.simpleanalyticscdn.com https://cdn.dribbble.com; font-src 'self'; connect-src 'self' https://sheets.googleapis.com https://challenges.cloudflare.com https://smtp.gmail.com https://scripts.simpleanalyticscdn.com/latest.js https://queue.simpleanalyticscdn.com/append https://region1.google-analytics.com; object-src 'none'; frame-src https://challenges.cloudflare.com; base-uri 'none'; form-action 'self'; block-all-mixed-content";
export const PROD_CSP_CONTENT: string =
	"default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://www.googletagmanager.com https://scripts.simpleanalyticscdn.com/latest.js https://queue.simpleanalyticscdn.com https://*.google-analytics.com https://*.googletagmanager.com; style-src 'self' 'unsafe-inline' https://4forin-593620436.imgix.net https://fonts.gstatic.com https://fonts.googleapis.com https://www.googletagmanager.com https://*.google-analytics.com; img-src 'self' data: https://4forin-593620436.imgix.net https://images.unsplash.com http://www.w3.org/2000/svg http://www.w3.org/1999/xlink https://queue.simpleanalyticscdn.com https://cdn.dribbble.com https://*.google-analytics.com https://*.googletagmanager.com https://fonts.gstatic.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com; connect-src 'self' https://sheets.googleapis.com https://challenges.cloudflare.com https://smtp.gmail.com https://scripts.simpleanalyticscdn.com/latest.js https://queue.simpleanalyticscdn.com/append https://region1.google-analytics.com https://*.google-analytics.com https://*.googletagmanager.com; object-src 'none'; frame-src https://challenges.cloudflare.com; base-uri 'none'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content";

// #### #### #### #### #### ####
// ####  COMPANY data:
// #### #### #### #### #### ####
export const COMPANY_ADDRESS_DATA: string[] = ['гр. Варна, 9100', 'ул. Академик Атанс Буров 3'];
export const COMPANY_EMAIL_DATA: string[] = ['chefobee@gmail.com'];
export const COMPANY_NAME: string = 'Chefo`s Cleaning';
export const COMPANY_PHONE_DATA: string[] = ['+359883336126'];

// #### #### #### #### #### ####
// ####  SOCIAL MEDIA:
// #### #### #### #### #### ####
export const COMPANY_PROFILE_FB: string = 'https://www.facebook.com/ChefosCleaning';
export const COMPANY_PROFILE_TT: string = 'https://www.facebook.com/ChefosCleaning';
export const DEV_CONTACT: string = 'https://www.linkedin.com/in/jarek-pawelski/';

// #### #### #### #### #### ####
// ####  NAVIGATION data:
// #### #### #### #### #### ####
export const NAVIGATION_ITEMS: {
	name: string;
	url: string;
	title: string;
	isMobile: boolean;
	isFooter: boolean;
	isMain: boolean;
}[] = [
	// HOME
	{ name: 'home', url: '/', title: 'Начало', isMobile: true, isFooter: false, isMain: true },
	// SERVICES
	{
		name: 'services',
		url: '/services',
		title: 'Услуги',
		isMobile: true,
		isFooter: false,
		isMain: true
	},
	// ABOUT US
	{
		name: 'about',
		url: '/about',
		title: 'За нас',
		isMobile: true,
		isFooter: false,
		isMain: true
	},
	// ABOUT US / cookie
	{
		name: 'cookie',
		url: '/about/cookie-policy',
		title: 'Cookies',
		isMobile: false,
		isFooter: false,
		isMain: false
	},
	// ABOUT US / privacy
	{
		name: 'privacy-policy',
		url: '/about/privacy-policy',
		title: 'Политика за поверителност',
		isMobile: false,
		isFooter: false,
		isMain: false
	},
	// ABOUT US / terms
	{
		name: 'terms',
		url: '/about/terms',
		title: 'Условия за ползване',
		isMobile: false,
		isFooter: false,
		isMain: false
	},
	// CONTACT
	{
		name: 'contact',
		url: '/contact',
		title: 'Контакт',
		isMobile: true,
		isFooter: false,
		isMain: true
	}
];
