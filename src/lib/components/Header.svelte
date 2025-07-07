<script lang="ts">
	let { children } = $props();
</script>

<section class="flex w-full justify-center">
	<div class="relative h-full w-full">
		{#if children}
			{@render children()}
		{/if}
	</div>
</section>
