import { SITE_NAME } from '$constants';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => ({
	metaData: {
		currentUrl: url.href,
		orginUrl: url.origin,
		path: url.pathname,
		description: `Открийте историята зад ${SITE_NAME}. Нашата мисия, ценности и ангажимент за предоставяне на изключителни услуги във Варна`,
		title: 'За нас',
		type: 'article'
	}
});
