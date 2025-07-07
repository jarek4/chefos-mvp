<script lang="ts">
	import { NAVIGATION_ITEMS } from '$constants';
	import logo1 from '$assets/images/chefos_logo_1.svg';
	import { AppBar, Modal } from '@skeletonlabs/skeleton-svelte';
	import Menu from 'lucide-svelte/icons/menu';
	const mainNavLinkStyles =
		'text-secondary-900 text-base font-medium translate-y-0 transition duration-300 ease-in-out hover:text-primary-700 hover:-translate-y-1 transform';
	const mobileNavLinkStyles = 'px-2 py-1 transition-colors hover:bg-surface-200';

	const mainNavLinks = NAVIGATION_ITEMS.filter((item) => item.isMain);
	const mobileNavLinks = NAVIGATION_ITEMS.filter((item) => item.isMobile);

	import { onMount } from 'svelte';
	let drawerState = $state(false);
	function drawerClose() {
		drawerState = false;
	}
	function drawerOpen() {
		drawerState = true;
	}

	// Close Modal navigation when window is expanded
	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth > 639) {
				drawerState = false;
			}
		};
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}
		// Cleanup on component destroy
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		};
	});
</script>

<!-- NAVBAR -->
<div
	class="bg-surface-100/30 dark:bg-surface-300/60 flex w-full items-center justify-between"
	role="navigation"
>
	<AppBar
		headlineClasses="sm:hidden"
		centerClasses="hidden sm:block"
		leadClasses="h-[4em]"
		classes="z-[1] flex justify-between bg-transparent"
		trailClasses="mr-6"
	>
		{#snippet lead()}
			<img src={logo1} width="120" height="120" alt="website logo" aria-label="website logo" />
		{/snippet}
		{#snippet trail()}
			<div class="hidden space-x-4 sm:flex">
				{#each mainNavLinks as item}
					{#if item.url !== ''}
						{@render link2(item.url, item.title, false)}
					{/if}
				{/each}
			</div>
			<div class="z-[] block sm:hidden">
				<Modal
					onclick={drawerOpen}
					open={drawerState}
					triggerBase="btn preset-tonal"
					contentBase="bg-surface-100 opacity-75 p-4 space-y-4 shadow-xl w-[220px] fixed top-0 right-0 dark:bg-secondary-300/50"
					positionerJustify="justify-start"
					positionerAlign=""
					positionerPadding=""
					transitionsPositionerIn={{ x: 0, duration: 400 }}
					transitionsPositionerOut={{ x: 300, duration: 200 }}
				>
					{#snippet trigger()}
						{#if !drawerState}
							<Menu size={20} aria-label="open" role="button" />
						{/if}
					{/snippet}
					{#snippet content()}
						<div class="flex flex-col items-end space-y-4 p-4">
							<button
								type="button"
								class="btn preset-filled pb-3"
								aria-label="close"
								onclick={drawerClose}>x</button
							>
							{#each mobileNavLinks as item}
								{#if item.url !== ''}
									{@render link2(item.url, item.title, true)}
								{/if}
							{/each}
						</div>
					{/snippet}
				</Modal>
			</div>
		{/snippet}
	</AppBar>
</div>

{#snippet link2(href: string, title: string, isMobile: boolean)}
	{#if isMobile}
		<a {href} class={mobileNavLinkStyles} onclick={() => drawerClose()}>{title}</a>
	{:else}
		<a {href} class={mainNavLinkStyles}>{title}</a>
	{/if}
{/snippet}
