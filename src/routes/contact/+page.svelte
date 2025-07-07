<script lang="ts">
	import { ContactForm } from '$components';
	import ContactDetails from '$components/contact_form/ContactDetails.svelte';

	let { data } = $props();
	let turnstileSiteKey = $derived(data.turnstileSiteKey);
</script>

<div class="px-2 py-6 lg:px-8">
	<h1 class="mb-8 text-center text-3xl font-bold md:mb-16 md:text-4xl">Контакт</h1>
	<!-- Contact form and details wrapper. Row on large, column on medium scren -->
	<div class="md:mx:8 mx-1 flex flex-wrap lg:mx-2">
		<section class="mb-8 w-full lg:mb-0 lg:w-1/2 lg:px-4">
			<!-- <ContactForm /> -->
			<ContactForm formData={data.form} {turnstileSiteKey} />
		</section>
		<section class="w-full px-4 lg:w-1/2">
			<ContactDetails />
		</section>
	</div>
</div>
