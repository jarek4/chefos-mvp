import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment'; // Use $app/environment for build checks
import { APP_ENV, APP_ENV_DEV, DEV_CSP_CONTENT, PROD_CSP_CONTENT } from '$constants';

const isDev = APP_ENV === APP_ENV_DEV;
const dayInSec = 86400; // 1 day * 24 hours * 60 minutes * 60 seconds
const sixh = dayInSec / 4;
const cacheControlValue = `public, max-age=${dayInSec}, s-maxage=${dayInSec}, stale-while-revalidate=${sixh}`;

// Define the headers you want to apply globally

const staticSecurityHeaders = {
	'X-Frame-Options': 'SAMEORIGIN',
	'Strict-Transport-Security': 'max-age=604800; includeSubDomains', // 1 Week example
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=()'
};

// The main handle function
export const handle: Handle = async ({ event, resolve }) => {
	// Skip hook logic during build/prerender if it causes issues
	if (building) {
		return await resolve(event);
	}
	const cspContent = isDev ? DEV_CSP_CONTENT : PROD_CSP_CONTENT;
	// Resolve the request to get the response
	const response = await resolve(event);

	// Apply static security headers
	for (const [key, value] of Object.entries(staticSecurityHeaders)) {
		response.headers.set(key, value);
	}
	response.headers.set('Content-Security-Policy', cspContent);

	//  Cache only for success responses)
	if (response.status >= 200 && response.status < 300) {
		response.headers.set('Cache-Control', cacheControlValue);
	} else {
		// O  Ensure errors/redirects are not cached
		response.headers.set('Cache-Control', 'no-store, max-age=0');
	}

	// Return the modified response
	return response;
};
