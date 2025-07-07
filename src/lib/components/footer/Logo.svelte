<script lang="ts">
	let { href = '/', src = '', text = '' } = $props();
</script>

<a {href} class="flex items-center">
	<img {src} alt="footer logo" width="90" height="90" class="me-3 h-12" />
	<span class="dark:text-surface-300 mb-2 self-end text-xs font-semibold whitespace-nowrap"
		>{text}</span
	>
</a>
