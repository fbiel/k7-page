<script>
	import '@fontsource-variable/kufam';
	import '@fontsource-variable/kufam/wght-italic.css';
	import '@fontsource-variable/karla';
	import '@fontsource-variable/karla/wght-italic.css';
	import '../app.css';
	import { companyLd, ldStringify } from '$lib/utils/seo';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	const ld = ldStringify(companyLd);
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<link rel="icon" href="https://cms.k-7.eu/uploads/logo_flat_k7_transparent_f915a584f2.svg" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow, archive" />
	<meta
		name="description"
		content="CAD, Software, Elektronik und Robotik aus einer Hand. Engineering made in Karlsruhe, Germany"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>K7-Konzept Karlsruhe GmbH</title>
	{@html ld}
</svelte:head>

<slot />
