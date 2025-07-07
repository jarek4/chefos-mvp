<script lang="ts">
	import quality from '$assets/images/quality2.svg';
	import safety from '$assets/images/safety1.svg';
	import comfort from '$assets/images/comfort.svg';
	const bottomItems = [
		{
			description:
				'Предлагаме услуги с изключително качеатво. Наблягаме на детайлите. Голям опит плюс качествени препарати и инструменти са неоценеи. Ние се придържаме към устойчиви практики, като пестене на ресурси и избягване на ненужна консумация.',
			svg: quality,
			title: 'Качествено'
		},
		{
			description:
				'Безопасността е един от нашите приоритети! Винаги внимаваме за да създадем безопасна работна среда за нас и нашите клиенти - "safety first". Използваме продукти, които са нетоксични и сертифицирани като безопасни.',
			svg: safety,
			title: 'Безопасно'
		},
		{
			description:
				'Стараем се да е удобно за Теб! Доколкото е възможно, съобразяваме се с очакванията на нашите клиенти. Докато едновременно прилагаме изпробвани практики които помагат за опазването на околната среда - ние сме социално отговорна компания.',
			svg: comfort,
			title: 'Удобно'
		}
	];
</script>

{#snippet item(svg: string, title: string, description: string)}
	<!-- BOTTOM CONTAINER ITEMS -->
	<div
		class="flex flex-col items-center rounded-lg p-4 text-center transition-transform hover:scale-105 hover:transform hover:shadow-md"
	>
		<div
			class="mb-4 flex h-15 w-15 items-center justify-center rounded-full border-2 border-amber-400/5 transition-all hover:border-amber-500 hover:bg-amber-50 md:h-17 md:w-17"
		>
			{#if svg}
				<img src={svg} width="66" height="70" alt={title} />
			{/if}
		</div>
		<h2 class="text-secondary-950 dark:text-secondary-100 mb-3 text-xl font-semibold">{title}</h2>
		<p class="text-gray-900 dark:text-gray-300">{description}</p>
	</div>
{/snippet}

<div
	class="bg-surface-50/80 shadow-surface-200/40 relative z-10 mx-4 -mt-12 flex flex-col gap-4 rounded-md px-6 py-8 shadow-lg md:mx-8 md:-mt-14 md:grid md:grid-cols-3 md:px-12 md:py-12 lg:grid-cols-3 dark:bg-gray-800/80"
>
	<!-- BOTTOM CONTAINER ITEMS -->
	{#each bottomItems as { svg, title, description }}
		{@render item(svg, title, description)}
	{/each}
</div>
