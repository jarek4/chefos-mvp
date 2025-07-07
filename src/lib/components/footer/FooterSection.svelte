<script lang="ts">
	let { children, title = '' } = $props();
</script>

<div>
	<h2 class="dark:text-surface-400 mb-6 text-xs font-semibold text-gray-900 uppercase md:text-sm">
		{title}
	</h2>
	<ul class="font-medium text-gray-500 dark:text-gray-400">
		{#if children}
			{@render children()}
		{/if}
	</ul>
</div>
