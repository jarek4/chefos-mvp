<script lang="ts">
	import cleaning from '$assets/images/cleaning1.svg';
	import facade from '$assets/images/facade36.svg';
	import windows from '$assets/images/windows2.svg';

	const services: {
		img: string;
		imgAlt: string;
		title: string;
		description: string;
	}[] = [
		{
			img: windows,
			imgAlt: 'Window cleaning device',
			title: 'Прозорци и витрини',
			description: description(
				'Услугата включва премахване на прах, замърсявания и петна от вътрешната и външната страна на прозорците и витрините. Използваме професионални инструменти като телескопични мопове,<u> деминерализирана вода</u>, специализирани почистващи препарати, които осигуряват безупречен блясък без следи. Подходящо както за стандартни прозорци, така и за големи стъклени витрини.<br/>',
				'Върнете свежестта и кристалния блясък на вашите прозорци и витрини!'
			)
		},
		{
			img: cleaning,
			imgAlt: 'Small desk, bucket and broom',
			title: 'Офиси и домове',
			description: description(
				'Тази услуга включва цялостно почистване на жилището, офис или помещение: прахосмукиране на подове и килими, измиване на твърди настилки, почистване на мебели, кухненски плотове и уреди, както и санитарни помещения. Доколкото е възможно съобразяваме се с предпочитанията на клиента. Добре поддържаната хигиена ще допринесе за комфорта у дома и за продуктивността в офиса.<br/>',
				'Грижим се за всеки детайл, за да ви осигурим комфорт и чистота.'
			)
		},
		{
			img: facade,
			imgAlt: 'Shiny house',
			title: 'Фасади',
			description: description(
				'Тази услуга включва премахване на замърсявания, мухъл и налепи от фасадата на сградата. Фасадата  най-честа има нужда от почистване за поддържане на търговски вид. Използваме рофесионално оборудване за високо налягане. Процесът е съобразен със спецификата на материала – фасадните плочи, мазилка или стъкло, за да се гарантира дълготраен резултат без повреди.<br/>',
				'Възвърни първоначална красота на фасадата.'
			)
		}
	];

	function description(p: string, span: string): string {
		return `<p itemprop="description" class="mb-6 dark:text-gray-900 text-gray-600">${p}<span class="text-secondary-900 dark:text-secondary-50 font-semibold">${span}</span></p>`;
	}
</script>

<article itemscope itemtype="https://schema.org/Service">
	<div class="overflow-hiddenpx-4 bg-surface-50 dark:bg-surface-950 w-full py-12">
		<div class="mx-auto max-w-6xl">
			<h1
				class="relative mx-4 mt-2 mb-8 overflow-visible py-8 text-center text-5xl font-bold md:overflow-hidden"
			>
				<span
					class="text-secondary-200/8 absolute top-1/2 left-1/2 z-5 w-full -translate-x-1/2 -translate-y-1/2 transform align-text-top text-6xl tracking-widest md:text-7xl md:tracking-[0.2em] lg:text-9xl"
					>SERVICES</span
				>
				<span class="relative z-20 align-bottom text-2xl opacity-38 md:text-4xl lg:text-6xl"
					>КАКВО ПРЕДЛАГАМЕ</span
				>
			</h1>
			<!-- <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> {/* Improved grid layout */} -->
			<div class="mx-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-2 lg:grid-cols-3">
				{#each services as { title, description, img, imgAlt }}
					<div
						class="group bg-secondary-50 dark:bg-secondary-300 rounded-lg p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div
							class="mb-6 flex h-18 w-18 items-center justify-center rounded-lg bg-purple-700 transition-all duration-300 group-hover:bg-purple-800 md:h-22 md:w-22"
						>
							<!-- <img src={img} alt={imgAlt} width="64" height="64" class="object-contain" /> {/* Improved image handling */} -->
							<img src={img} alt={imgAlt} />
						</div>
						<h2 itemprop="name" class="mb-3 text-xl font-semibold text-gray-800">{title}</h2>
						{@html description}
					</div>
				{/each}
			</div>
		</div>
	</div>
</article>
