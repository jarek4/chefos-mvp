<script lang="ts">
	import { page } from '$app/state';
	import { superForm } from 'sveltekit-superforms';
	import { Turnstile } from 'svelte-turnstile'; // CF Turnstile

	let { formData, turnstileSiteKey } = $props();

	const { delayed, enhance, errors, form, message } = superForm(formData, {
		delayMs: 200,
		timeoutMs: 5000,
		clearOnSubmit: 'errors',
		multipleSubmits: 'prevent',
		onResult({ result }) {
			const status403 = result.status == 403;
			const t: number = result.data?.form?.data?.throttling ?? 0;
			if (status403 && t > 0) {
				throttling = t;
				isLoading = true;
				setThrottling(t);
			}
		}
	});

	const errorStyle = 'bg-warning-50/40 text-error-800 border-error-500';
	const successStyle = 'bg-success-200/40 text-primary-700 font-medium border-success-600';
	const checkboxText = 'С изпращането Вие се съгласявате с Условията и Политиката за поверителност';

	function setThrottling(delaySec: number) {
		setTimeout(
			() => {
				isLoading = false;
			},
			delaySec * 60 * 1000
		);
	}

	let isLoading = $state(false);
	let throttling = $state(0);
	let termsCheckbox = $state(false);
</script>

<!-- Contact Form wrapper -->
<div class="bg-surface-50 dark:bg-surface-400 lg:p5 rounded-lg p-3 shadow-sm md:p-8">
	<h2 class="mb-6 text-2xl font-bold md:text-3xl">Форма за контакт</h2>
	<!-- Superforms -->
	<form method="POST" action="?/sendemail" use:enhance>
		<!-- Email input wrapper -->
		<div class="mb-4">
			<label for="email" class="mb-1 hidden text-sm">E-mail</label>
			<input
				bind:value={$form.email}
				disabled={isLoading}
				required
				maxlength="50"
				type="email"
				placeholder="Твоят e-mail *"
				class="border-teal-8 dark:bg-surface-800 w-full rounded border px-4 py-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				id="email"
				name="email"
				aria-invalid={$errors?.email ? 'true' : undefined}
				aria-describedby="email-error"
			/>
			{#if $errors?.email}{@render errorMsg($errors?.email?.toString(), 'email')}{/if}
		</div>
		<!-- Message input wrapper -->
		<div class="mb-4">
			<label for="msg" class="mb-1 hidden text-sm">Съобщение</label>
			<textarea
				bind:value={$form.msg}
				placeholder="Съобщение *"
				rows="6"
				class="border-teal-8 00 dark:bg-surface-800 w-full
				rounded border px-4 py-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				name="msg"
				id="msg"
				aria-invalid={$errors?.msg ? 'true' : undefined}
				aria-describedby="msg-error"
			></textarea>
			{#if $errors?.msg}{@render errorMsg($errors?.msg?.toString(), 'msg')}{/if}
		</div>
		<!-- Checkboxes wrapper -->
		<div class="mb-4">
			<div class="mb-1 flex items-start">
				<input
					name="terms"
					bind:checked={termsCheckbox}
					value={termsCheckbox}
					type="checkbox"
					required
					id="terms"
					class="mt-1 mr-2"
					aria-invalid={$errors.terms ? 'true' : undefined}
					aria-describedby="terms-error"
				/>
				<label for="terms" class="text-xs">
					{checkboxText}
				</label>
			</div>
			{#if $errors?.terms}{@render errorMsg($errors?.terms?.toString(), 'terms')}{/if}
		</div>
		{#if $message}
			<p
				class="px-auto my-3 rounded-lg border-2 p-2 text-center {page.status == 200
					? successStyle
					: errorStyle}"
				role="alert"
				aria-live="polite"
			>
				{$message}
			</p>
		{/if}
		<button
			type="submit"
			disabled={isLoading || $delayed}
			class="transform rounded bg-blue-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:scale-105 hover:bg-blue-600"
		>
			<div class="flex gap-8">
				{#if !$delayed}
					Изпрати
				{:else}
					{@render loadingSpinner()}
				{/if}
			</div>
		</button>

		<!-- CF Turnstile sveltekit-turnstile -->
		<div class="mx-1 mt-4 justify-items-end">
			<Turnstile siteKey={turnstileSiteKey ?? ''} responseFieldName="cfTurnstileResponse" />
		</div>
	</form>
</div>

{#snippet errorMsg(txt: string | undefined, id: string = '')}
	<p class="m-3" id={`${id}-error`}>
		<span class="bg-warning-50/40 text-error-800 border-warning-800 rounded-lg border-2 p-1"
			>{txt ?? ''}</span
		>
	</p>
{/snippet}

{#snippet loadingSpinner()}
	<svg
		class="animate-spin text-gray-300"
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
	>
		<path
			d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
		<path
			d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-blue-500"
		>
		</path>
	</svg>
{/snippet}
