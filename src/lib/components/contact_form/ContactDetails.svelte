<script lang="ts">
	import { COMPANY_EMAIL_DATA, COMPANY_PHONE_DATA } from '$constants';

	const ContactType: {
		tel: string;
		email: string;
		address: string;
	} = {
		tel: 'tel',
		email: 'email',
		address: 'address'
	};

	// {@html svgIcons[data.type as ObjectKey]}
	type ObjectKey = keyof typeof svgIcons;

	const svgIcons: { address: string; email: string; tel: string } = {
		address:
			'<path stroke-linecap="round"stroke-linejoin="round" stroke-width="2"	d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round"	stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>',
		email:
			'<path stroke-linecap="round"	stroke-linejoin="round"	stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
		tel: '<path stroke-linecap="round"	stroke-linejoin="round"	stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>'
	};

	interface ContactItem {
		type: string;
		title: string;
		elements: { content: string; leading: string }[];
	}

	function makeContactItemElements(
		content: string[],
		leadings: string[] = []
	): { content: string; leading: string }[] {
		return content.map((c, i) => ({
			content: c,
			leading: leadings[i] || ''
		}));
	}

	const contactItems: ContactItem[] = [
		{
			type: ContactType.email,
			title: 'Email',
			elements: makeContactItemElements(COMPANY_EMAIL_DATA)
		},
		{
			type: ContactType.tel,
			title: 'Телефон',
			elements: makeContactItemElements(COMPANY_PHONE_DATA, ['Стефан'])
		}
	];

	const contactLinkStyle =
		'transform transition-colors duration-200 hover:text-blue-600 hover:font-semibold';
</script>

<div class="mt-10 pl-0 lg:pl-12">
	{#each contactItems as data}
		<!-- Contact card -->
		<div class="mb-10 flex pt-1">
			<!-- Contact card icon wrapper (left side)-->
			<div
				class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					{@html svgIcons[data.type as ObjectKey]}
				</svg>
			</div>
			<!-- Contact card title and content text (right side)-->
			<div>
				<h2 class="mb-2 text-xl font-semibold">{data.title}</h2>
				{#each data.elements as e}
					{#if data.type === ContactType.tel}
						<a
							href={`tel:${e.content}`}
							class={contactLinkStyle}
							aria-label={`Perform phone call to ${e.content}`}
							>{e.leading}: ({e.content.slice(0, 4)})
							{e.content.slice(4, 6)}-{e.content.slice(6, 9)}-{e.content.slice(
								9,
								e.content.length
							)}</a
						> <br />
					{:else if data.type === ContactType.email}
						<a
							href={`mailto:${e.content}?subject=ChefosCleaning%20contactForm&body=Hi%2C%20I%20have%20a%20question`}
							class={contactLinkStyle}
							aria-label={`Send email to ${e.content}`}
						>
							{e.content}
						</a>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</div>
