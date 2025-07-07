<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		href: string;
	}
	let { children, href = '' }: Props = $props();
	const aria = `lint to ${href}`;
</script>

<a
	{href}
	class="hover:text-primary-400 text-xs text-gray-500 hover:underline lg:text-sm dark:text-gray-400"
	aria-label="Developer contact page"
>
	{#if children}
		{@render children()}
	{/if}
</a>
