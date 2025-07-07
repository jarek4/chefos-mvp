<script lang="ts">
	import { APP_ENV, APP_ENV_DEV, PROD_BASE_URL, DEV_BASE_URL } from '$constants';
	// pathname: '/about/privacy-policy',
	// origin: 'http://localhost:5173'
	// href: 'http://localhost:5173/about/privacy-policy'

	interface Props {
		title: string;
		description: string;
		staticImgUrl?: string;
		type: string;
		currentUrl: string;
		originUrl: string;
		path: string;
	}
	let {
		title = 'Почистване на прозорци',
		description = 'Варна и околноста. Прозорци почистени от професионалист!',
		staticImgUrl = '/',
		type = 'article',
		currentUrl = '/',
		originUrl = '/',
		path = ''
	}: Props = $props();

	// const isDev = APP_ENV === APP_ENV_DEV;
	// const baseUrl = isDev ? DEV_BASE_URL : PROD_BASE_URL;

	// export let title: string = 'Почистване на прозорци';
	// export let description: string = 'Варна и околноста. Прозорци почистени от професионалист!';
	// export let staticImgUrl: string = `${baseUrl}/meta-fb.png`;
	// export let type: string = 'article';
	// export let currentUrl: string = baseUrl;

	let isDev = $state(APP_ENV === APP_ENV_DEV);
	// let baseUrl = $derived(isDev ? DEV_BASE_URL : PROD_BASE_URL);

	let currentTitle = $derived(`${title} | Почистване Варна | Chefo’s Cleaning`);
	let imgUrl = $derived(`${isDev ? DEV_BASE_URL : PROD_BASE_URL}/meta-fb.png`);
	// let canonicalUrl = $derived(`${isDev ? DEV_BASE_URL : PROD_BASE_URL}${path}`);
	// let currentPath = $state(path);

	// const currentTitle = `${title} | Почиатване Варна | Chefo’s Cleaning`;
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{currentTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Варна, почистване, прозорци, витрини, професионално почистване, почистване на прозорци, почистване на витрини, почистване на стъкла, почистване на офиси, почистване на домове"
	/>
	<link rel="canonical" href={`${isDev ? DEV_BASE_URL : PROD_BASE_URL}${path}`} />
	<!-- Favicons -->
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

	<!-- Open Graph Meta Tags -->
	<meta property="og:locale" content="bg_BG" />
	<meta property="og:locale:alternate" content="en_GB" />
	<!-- <meta property="og:site_name" content={`Почистване Варна | ${SITE_NAME}`} /> -->
	<meta property="og:site_name" content="Почистване Варна | Chefos Cleaning" />
	<!-- <meta name="og:locality" content="Варна" />  not valid!! -->
	<meta name="geo.region" content="BG-03" />
	<meta property="og:url" content={currentUrl} />
	<!-- By default, this is website -->
	<!-- Use article for blog posts and news, as some social media platforms provide special features for articles, such as publication dates. -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={currentTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`${originUrl}/meta-fb.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="чистене на витрини" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={currentTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${originUrl}/meta-fb.png`} />
	<meta name="twitter:image:alt" content="чистене на витрини" />

	<!-- Other Meta TagsD -->
	<meta name="robots" content="index,follow" />
	<meta name="language" content="BG" />
	<!-- <meta name="rating" content="General" /> -->
	<meta name="generator" content="Svelte" />
	<meta name="geo.placename" content="Варна" />
	<meta
		name="classification"
		content="Почистване във Варна и околността. Прозорци, витрини, стъкла и офиси почистени от професионалист."
	/>
	<meta name="copyright" content="Copyright Chefos Cleaning - All rights Reserved." />
	<meta name="designer" content="jarek.code" />
	<meta name="apple-mobile-web-app-title" content={currentTitle} />

	<!-- Schema.org JSON-LD -->
	{@html `
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${currentTitle}",
    "url": "${currentUrl}",
    "description": "${description}",
    "image": {
        "@type": "ImageObject",
        "url": "${originUrl}/meta-fb.png",
        "contentUrl": "${originUrl}/meta-fb.png",
        "width": 1200,
        "height": 630,
        "caption": "Чистене на витрини",
        "description": "Чефос Клийнинг - Професионалное чистене на витрина във Варна"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Варна",
        "postalCode": "9000",
        "addressCountry": "BG"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Чефос Клийнинг",
        "url": "https://chefoscleaning.com",
        "logo": {
            "@type": "ImageObject",
            "url": "${originUrl}/favicon-96x96.png",
            "contentUrl": "${originUrl}/favicon-96x96.png",
            "width": 96,
            "height": 96,
            "caption": "Лого на Чефос Клийнинг",
            "description": "Официално лого на фирма Чефос Клийнинг от Варна"
        }
    },
    "mainEntity": {
        "@type": "WebSite",
        "name": "Почистване Варна | Чефос Клийнинг",
        "url": "${currentUrl}",
        "potentialAction": {
            "@type": "ReadAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "${currentUrl}"
            }
        }
    }
}
</script>
`}
</svelte:head>
