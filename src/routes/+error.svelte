<script lang="ts">
	import { NAVIGATION_ITEMS as nav } from '$lib/utils/constants';
	import { page } from '$app/state';
	const notFoundStatus = '404';
	const h = nav.find((i) => i.name == 'home');
	const homeUrl = h?.url ?? '/';
	const pStatus = $derived(page.status?.toString() ?? '501');

	const err = page?.error?.message ?? '';
</script>

<!-- <Error404 pageStatus={pStatus} errorMsg={page?.error?.message ?? ''}></Error404> -->
{#if pStatus == notFoundStatus}
	<!-- ## 404 page ## -->
	<section class="page_404">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="col-sm-10 col-sm-offset-1 text-center">
						<div class="four_zero_four_bg">
							<p class="dark:text-gray-400">{page?.error?.message ?? ''}</p>
							<h1 class="text-center">{pStatus}</h1>
						</div>
						<div class="contant_box_404">
							<h3 class="h2 dark:text-gray-400">Look like you're lost</h3>
							<p class="dark:text-gray-600">the page you are looking for not avaible!</p>
							<a href={homeUrl} class="link_404">Go to Home</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<p class="text-xs">gif: Dribbble</p>
{:else}
	<!-- ## ERROR page ## -->
	<section class="flex h-full items-center sm:p-16 dark:bg-gray-50 dark:text-gray-800">
		<div
			class="container mx-auto flex flex-col items-center justify-center space-y-8 px-5 text-center sm:max-w-md"
		>
			<div class="mt-2 mb-4">
				<p class="text-xl">Looks like our services are currently offline</p>
				<p class="text-md">or something bad has happend!</p>
				<p class="text-md">Try after a while</p>
			</div>
			<div class="contant_box_506">
				<a href={homeUrl} class="link_506">Back to homepage</a>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="h-40 w-40 dark:text-gray-400"
			>
				<path
					fill="currentColor"
					d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
				></path>
				<rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
				<polygon
					fill="currentColor"
					points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
				></polygon>
				<polygon
					fill="currentColor"
					points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
				></polygon>
			</svg>

			<p class="text-xl">{pStatus}</p>
			<p class="text-md">{page?.error?.message ?? ''}</p>
		</div>
	</section>
{/if}

<style>
	.page_404 {
		padding: 40px 0;
		background: #fff;
		font-family: 'Arvo', serif;
	}
	.four_zero_four_bg {
		background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
		height: 400px;
		background-position: center;
	}
	.four_zero_four_bg h1 {
		font-size: 70px;
		color: rgba(0, 0, 0, 0.2);
	}
	.link_404 {
		color: #fff !important;
		padding: 10px 20px;
		background: #39ac31;
		margin: 20px 0;
		display: inline-block;
		font-size: large;
		font-weight: bold;
		border-radius: 0.5em;
	}
	.contant_box_404 {
		margin-top: -50px;
	}
	.contant_box_506 {
		margin-top: -10px;
	}
	.link_506 {
		color: #fff !important;
		border-radius: 0.5em;
		padding: 10px 20px;
		background: #435eea;
		margin: 20px 0;
		display: inline-block;
		font-size: large;
		font-weight: bold;
	}
</style>
