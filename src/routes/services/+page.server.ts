import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => ({
	metaData: {
		currentUrl: url.href,
		orginUrl: url.origin,
		path: url.pathname,
		description:
			'Разгледай офертата ни. Намери услуга за почистване във Варна точно според Твоите нужди. Чистене на прозорци, офиси, фасади. Виж защо да ни избереш.',
		title: 'Услуги',
		type: 'article'
	}
});
