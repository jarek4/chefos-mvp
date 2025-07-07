import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	// pathname: '/about/privacy-policy',
	// origin: 'http://localhost:5173'
	// href: 'http://localhost:5173/about/privacy-policy'
	return {
		defaultMeta: {
			currentUrl: url.href,
			orginUrl: url.origin,
			path: url.pathname,
			description:
				'Професионално почистване на прозорци, витрини, апартаменти, офиси и фасади. В град Варна и околноста',
			title: 'Чефос Клийнинг',
			type: 'website',
			image: {
				url: `${url.origin}/meta-fb.png`,
				alt: 'Почистване на прозорци'
			}
		}
	};
};
