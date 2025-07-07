<script lang="ts">
	import '../app.css';
	import companyLogo from '$assets/images/chefos_logo_1.svg';
	import { CookieBanner, Footer, Header, Hero, MetaTags, TopBar } from '$components';
	import { page } from '$app/state';
	function isHome() {
		const homeUrls = new Set(['/', '/home', '/start']);
		return homeUrls.has(page.url.pathname);
	}

	let { children, data } = $props();
</script>

<MetaTags
	currentUrl={page.data.metaData?.currentUrl ?? data.defaultMeta.currentUrl}
	description={page.data.metaData?.description ?? data.defaultMeta.description}
	title={page.data.metaData?.title ?? data.defaultMeta.title}
	type={page.data.metaData?.type ?? data.defaultMeta.type}
	staticImgUrl={page.data.metaData?.staticImgUrl ?? data.defaultMeta.image.url}
	originUrl={page.data.metaData?.originUrl ?? data.defaultMeta.orginUrl}
	path={page.data.metaData?.path ?? data.defaultMeta.path}
/>

<div class="mx-auto flex min-h-screen max-w-[1300px] flex-col rounded-b-lg">
	<!-- Google Tag Manager (noscript) -->
	<noscript
		><iframe
			src="https://www.googletagmanager.com/ns.html?id=GTM-NP3QGL8H"
			height="0"
			width="0"
			style="display:none;visibility:hidden"
			title="gtm"
		></iframe></noscript
	>
	<!-- End Google Tag Manager (noscript) -->
	<Header>
		{#if isHome()}
			<Hero topNavigation={TopBar} />
		{:else}
			<TopBar />
		{/if}
	</Header>
	<main class="flex-grow">
		{@render children()}
	</main>
	<CookieBanner />
	<Footer logoUrl={companyLogo} />
</div>
