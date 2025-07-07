<script lang="ts">
	interface Props {
		href: string;
		label: string;
		svgUrl: string;
	}
	let { href, label, svgUrl }: Props = $props();
	const altTxt = `${label} service icon`;
</script>

<a {href} class="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noopener noreferrer">
	<img src={svgUrl} alt={altTxt} width="40" height="40" />
	<span class="sr-only">{label}</span>
</a>
