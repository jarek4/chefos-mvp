<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<section class="itemscope" itemtype="https://schema.org/DataPolicySection">
	<div class="px-4">
		<h1 class="my-4 text-center text-2xl font-semibold">Политика за поверителност</h1>
		{#await data.terms}
			<div class="container my-6" role="progressbar">
				Loading...
				<Progress value={null} meterBg="bg-secondary-500" />
			</div>
		{:then sections}
			{#each sections as section}
				{#if section.title === 'updated'}
					<p role="doc-notice" class="mt-4 mb-8 indent-4 text-xs font-semibold italic">
						{sections[0].content}
					</p>
				{:else}
					<div class="mx-2 mb-2">
						<!-- title -->
						{#if section.title !== 'empty'}
							<h2 itemprop="name" class="mb-2 text-xl">{section.title.toUpperCase()}</h2>
						{/if}

						<!-- subtitle -->
						{#if section.subtitle !== 'empty'}
							<h3
								role="doc-subtitle"
								class="text-md my-2 {!section.isSuccess ? 'text-error-500' : ''}"
							>
								{section.subtitle.toUpperCase()}
							</h3>
						{/if}

						<!-- content -->
						{#if section.content !== 'empty'}
							<p
								itemprop="text"
								class="mb-4 indent-4 {!section.isSuccess ? 'text-warning-950 font-semibold' : ''}"
							>
								{section.content}
							</p>
						{/if}
					</div>
				{/if}
			{/each}
		{:catch error}
			<div class="mx-3 my-6" role="alert">
				<Progress value={null} meterBg="bg-tertiary-200" />
				<p class="text-error-500 mt-3">
					Our servers are taking a coffee break 🙈 Please try again in a bit.
				</p>
				<p class="text-error-500 mt-3">Error loading Privacy Policy.</p>
			</div>
		{/await}
	</div>
</section>
