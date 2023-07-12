<script lang="ts">
	import type { PageData } from './$types';
	import BlogSection from './blog-section.svelte';
	import ContactSection from './contact-section.svelte';
	import Hero from './hero.svelte';
	import References from './references.svelte';
	import ServiceSection from './service-section.svelte';
	export let data: PageData;

	import { setLang, t } from '$lib/stores/i18n';
	if (data.lang === 'en') {
		setLang('en');
	}
	if (!data.lang || data.lang === 'de') {
		setLang('de');
	}
</script>

{#await data?.lazy.jobs}
	<Hero />
{:then jobs}
	<Hero jobCount={jobs?.length ?? 0} />
{:catch}
	<Hero />
{/await}
<div class="flex flex-col gap-24">
	{#await data?.lazy?.references then references}
		{#if references}
			<References {references} />
		{/if}
	{:catch error}
		Leider kam es zu einem Fehler beim Laden der Referenzen!
	{/await}

	{#await data?.lazy?.departments then departments}
		{#if departments}
			<ServiceSection services={departments} />
		{/if}
	{:catch error}
		Leider kam es zu einem Fehler beim Laden unserer Leistungen!
	{/await}

	{#await data?.lazy?.articles then articles}
		{#if articles}
			<BlogSection posts={articles.data} />
		{/if}
	{:catch error}
		Leider kam es zu einem Fehler beim Laden unserer Leistungen!
	{/await}
	{#await data?.lazy?.details then detail}
		{#if detail}
			<ContactSection detail={detail.data.attributes} />
		{/if}
	{/await}
</div>
