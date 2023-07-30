<script>
	import { t } from '$lib/stores/i18n';
</script>

<div class="py-16 px-5 my-auto flex flex-col justify-center">
	<div class="container max-w-2xl my-auto mx-auto text-center flex flex-col">
		<img
			class="h-16 w-16 mx-auto bg-white p-2 rounded-lg border border-neutral-200"
			src="https://cms.k-7.eu/uploads/logo_flat_k7_transparent_f915a584f2.svg"
			alt="K7-Konzept Karlsruhe GmbH company logo"
		/>
		<p class="text-brand-600 dark:text-brand-200 text-lg font-semibold">404</p>
		<h1>{$t.error404.title}</h1>

		<p class="text-red-600 dark:text-red-400 my-5 font-light">
			{$t.error404.description}
		</p>
		<a href={$t.link}>Home →</a>
	</div>
</div>
