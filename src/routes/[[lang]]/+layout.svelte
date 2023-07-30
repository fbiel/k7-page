<script>
	import PageHeader from './page-header.svelte';
	import Portal from './portal.svelte';
	import { setLang } from '$lib/stores/i18n';

	/** @type {import('./$types').LayoutData} */
	export let data;

	if (data.lang === 'en') {
		setLang('en');
	} else {
		setLang('de');
	}
</script>

<div class="min-h-screen flex flex-col justify-between">
	<PageHeader />
	<div class="grow pt-12">
		<slot />
	</div>
	{#if data.details}
		<Portal detail={data.details.data.attributes} />
	{/if}
</div>
