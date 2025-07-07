<script lang="ts">
	import calendar from '$assets/images/calendar-ic.svg';
	import eco from '$assets/images/ecology-ic.svg';
	import talk from '$assets/images/talk-ic.svg';
	import { SITE_NAME } from '$lib/utils/constants';

	const heroH1 = `На кратко<br />за фирма<br /> ${SITE_NAME}`;
	const heroP =
		'Ние сме малък семеен бизнес от Варна. Малка фирма, но с голям опит и още по-голяма история! Всичко започва във Варна. Преди повече от 15 години започвахме с чистенето на прозорци и витрини. Постепено добавихме други услуги, като: почистване на апартаменти, чистене на фасади, включително на по-високи сгради.';
	const cards: {
		img: string;
		imgAlt: string;
		title: string;
		description: string;
	}[] = [
		{
			img: calendar,
			imgAlt: 'Icon of monthly calendar',
			title: 'Абонаментното почистване',
			description:
				'Това представлява професионална услуга, извършвана от опитен и квалифициран професионалист. Ние използваме оборудване от най-висок клас и внимателно подбрани качествени препарати, за да гарантираме безупречни резултати и комфорт за вас.'
		},
		{
			img: talk,
			imgAlt: 'Icon of a two persons',
			title: 'Ще обсъди с Вас детайлите',
			description:
				'С удоволствие ще организираме оглед в удобно за Вас време. По време на срещата ще обсъдим най-подходящата честота за почистване и определим часовия диапазон, който най-добре отговаря на вашите нужди.'
		},
		{
			img: eco,
			imgAlt: 'Icon of s hand and a small plant',
			title: 'Екологичен подход',
			description:
				'Нашият подход се основава на устойчиви решения: минимизираме пластмасовите отпадъци, използваме уреди с висока енергийна ефективност и оборудване с нисък разход на вода. Същевременно се придържаме към местен подход, за да намалим въглеродния отпечатък, свързан с транспорта.'
		}
	];
</script>

<article id="aboutUs" itemtype="https://schema.org/AboutPage" itemref="description">
	<div
		class="relative h-full w-full overflow-hidden rounded-md bg-gradient-to-r from-blue-700 to-sky-300 md:min-h-[600px]"
	>
		<div class="bg-primary-600/10 absolute inset-0 w-full rounded-md">
			<img
				src="https://images.unsplash.com/photo-1501045337096-542a73dafa4f?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Window with a lake and monatain view"
				class="h-full w-full rounded-md object-cover opacity-25 mix-blend-overlay md:object-fill"
				loading="lazy"
			/>
		</div>
		<div
			class="relative z-10 flex h-full w-full flex-col items-center justify-between px-4 py-8 sm:items-center sm:px-6 sm:py-12 md:flex-row md:items-start md:px-16"
		>
			<!-- Left side -->
			<div class="mb-10 w-full text-white md:mb-0 md:w-2/3 lg:w-3/5">
				<div class="relative">
					<div class="absolute top-0 left-0 h-36 w-1.5 bg-yellow-400"></div>
					<h1 class="mb-4 ml-6 text-4xl font-bold sm:mb-6 lg:text-5xl" itemprop="headline">
						{@html heroH1}
					</h1>
				</div>
				<p
					class="mb-6 max-w-lg px-6 text-neutral-100 sm:mb-8 sm:px-0 dark:text-gray-100"
					id="description"
					itemprop="text"
				>
					{heroP}
				</p>
			</div>
			<!-- Right side -->
		</div>
		<div class="absolute right-0 bottom-0">
			<p class="text-surface-800/90 mr-1 text-[9px]">
				Photo by <a
					href="https://unsplash.com/@1amfcs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>1AmFcS</a
				>
				on
				<a
					aria-label="Image source"
					href="https://unsplash.com/photos/black-window-frame-0-geTlVa3Lk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					rel="noopener noreferrer">Unsplash</a
				>
			</p>
		</div>
	</div>
	<section>
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
			<h2 class="text-primary-800 dark:text-primary-300 mb-8 text-2xl font-bold sm:text-3xl">
				Защо да се доверите на нас за почистването
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each cards as { title, description, img, imgAlt }}
					<!-- <div class="group rounded-lg p-4 transition-all duration-300 hover:bg-gray-50/10"> -->
					<div
						class="group items-start gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-gray-800/30 sm:gap-4"
					>
						<img
							src={img}
							alt={imgAlt}
							class="mb-4 h-16 w-16 shrink-0 object-contain text-yellow-400 transition-transform duration-300 group-hover:scale-110"
							width="64"
							height="64"
						/>
						<h3 class="text-secondary-800 mb-2 text-xl font-semibold">{title}</h3>
						<p class="text-secondary-950 dark:text-surface-300 text-sm">{description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</article>
