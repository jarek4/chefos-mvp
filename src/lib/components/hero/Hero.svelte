<script>
	import HeroBottomContainer from './HeroBottomContainer.svelte';
	import { COMPANY_EMAIL_DATA, COMPANY_PHONE_DATA, HOME_TITLE, HERO_TAGLINE } from '$constants';
	import { browser } from '$app/environment';

	let { topNavigation } = $props();
	let isSmallScreen = browser && window.innerWidth < 768;
	function handleActionBtn() {
		if (isSmallScreen) {
			window.location.href = `tel:${COMPANY_PHONE_DATA[0]}`;
		} else {
			const mailToUrl = `mailto:${COMPANY_EMAIL_DATA[0]}?subject=ChefosCleaning%20HomeActionBtn&body=Hi%2C%20I%20have%20a%20question`;
			window.location.href = mailToUrl;
		}
	}
	const actionBtnStyle =
		'btn preset-tonal-primary text-secondary-900 dark:text-secondary-50 mb-6 ml-4 transform font-semibold opacity-85 p-3 duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:text-white md:mb-1 md:p-5';
</script>

<!-- HERO SECTION-->
<section role="banner">
	<div
		id="chefos-hero-bg"
		class="h-[400px] w-full bg-cover bg-center md:h-[600px]"
		style="background-image: var(--chefos-hero-bg-image);"
	>
		<!-- NAVBAR-->
		{#if topNavigation}
			{@render topNavigation()}
		{/if}
		<!-- HERO CENTER-->
		{@render centerContent()}
	</div>
	<!-- SERVICES SECTION -->
	<HeroBottomContainer />
</section>

{#snippet centerContent()}
	<div class="relative flex h-[250px] items-end text-center text-white md:h-[400px]">
		<!-- action button -->
		<button aria-label="Contact us" onclick={handleActionBtn} type="button" class={actionBtnStyle}
			>Свържи се с нас</button
		>
		<!-- title and subtitle -->
		<div class="absolute top-0 left-0 mt-[1.0rem] ml-[1rem] md:mt-[6rem] md:ml-[4rem]">
			<h1 class="text-left text-3xl font-semibold">
				{@html HOME_TITLE}
			</h1>
			<p class="text-md text-left font-normal">{@html HERO_TAGLINE}</p>
		</div>
		<!-- hero image attributing -->
		<p class="absolute right-0 bottom-0 mb-3 text-[0.75rem] md:mb-0 lg:mb-0">
			Photo by <a
				href="https://unsplash.com/@markokelecevic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
				>markokelecevic</a
			>
			on
			<a
				aria-label="Image source"
				rel="noopener noreferrer"
				href="https://unsplash.com/photos/blue-and-white-chair-under-white-umbrella-on-beach-during-daytime-1gMmmVdcIl8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
				>Unsplash</a
			>
		</p>
	</div>
{/snippet}

<style>
	#chefos-hero-bg {
		--chefos-hero-bg-image: url('https://4forin-593620436.imgix.net/chefos/chefoscleaning-home-hero1_tfa2l3.png?auto=compress&auto=format&w=600&q=40');
	}

	@media (min-width: 768px) {
		#chefos-hero-bg {
			--chefos-hero-bg-image: url('https://4forin-593620436.imgix.net/chefos/chefoscleaning-home-hero1_tfa2l3.png?auto=compress&auto=format&w=1300&q=55');
		}
	}
</style>
