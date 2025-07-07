<script>
	import { SITE_NAME, NAVIGATION_ITEMS } from '$constants';
	import { APP_ENV, APP_ENV_DEV, PROD_BASE_URL, DEV_BASE_URL } from '$constants';

	const b = APP_ENV === APP_ENV_DEV ? DEV_BASE_URL : PROD_BASE_URL;

	const spanStyle = 'text-secondary-900 dark:text-secondary-700 font-semibold';
	const pStyle = 'indent-4 text-gray-500 dark:text-gray-500';
	// process.env.NODE_ENV= development/production
</script>

<section>
	<div class="space-y-4 p-4 md:p-10">
		<h1 class="my-6 text-center text-2xl font-semibold">Услуги за почистване във Варна</h1>
		<h2 class="text-md mb-6 text-center font-semibold">
			Добре дошли в <span class="text-secondary-900 dark:text-secondary-700 font-bold"
				>{SITE_NAME}</span
			> – Вашият партньор за чистота и блясък!
		</h2>
		<p class={pStyle}>
			Ние сме малка семейна фирма, базирана във Варна, специализирана в професионално почистване на
			<span class={spanStyle}>прозорци и витрини</span>. С грижа и внимание към детайлите,
			предлагаме също почистване на
			<span class={spanStyle}>апартаменти и офиси</span>. Разполагаме с нужно оборудване за миене на
			<span class={spanStyle}>фасади</span>.
		</p>
		<p class={pStyle}>
			Ние се гордеем, че използваме <span class={spanStyle}
				>екологично чисти и безопасни продукти</span
			>, които щадят околната среда и вашето здраве! Така допринасяме за опазване на природата и
			създаваме по-здравословна среда за вашия дом, офис и за нашата Варна.
		</p>
		<p class={pStyle}>
			Посветени сме на това да осигури максимален комфорт и свежест за нашите клиенти. Ние не
			пренегеваме мерките за безопасност! С дългогодишен опит и лично отношение към всяка задача,
			ние се стремим да превърнем всяко пространство в излъчващо чистота и уют.
		</p>
		<p class={pStyle}>
			Свържете се с нас днес, за да разберете как можем да Ви помогнем да постигнете <span
				class={spanStyle}>перфектната визия</span
			>
			за вашия дом, офис или витрина
			<a
				aria-label="Contact form link"
				href={NAVIGATION_ITEMS.find((item) => item.name === 'contact')?.url}
				class=" font-semibold text-blue-600 hover:text-sky-400"
			>
				->Изпратете запитване</a
			>
		</p>
	</div>
</section>
