<script lang="ts">
	import type { PageData } from './$types';
	import BlogSection from './blog-section.svelte';
	import ContactSection from './contact-section.svelte';
	import Hero from './hero.svelte';
	import References from './references.svelte';
	import ServiceSection from './service-section.svelte';
	export let data: PageData;
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
		<References {references} />
	{:catch error}
		Leider kam es zu einem Fehler beim Laden der Referenzen!
	{/await}

	{#await data?.lazy?.departments then departments}
		<ServiceSection services={departments} />
	{:catch error}
		Leider kam es zu einem Fehler beim Laden unserer Leistungen!
	{/await}

	{#await data?.lazy?.articles then articles}
		<BlogSection posts={articles.data} />
	{:catch error}
		Leider kam es zu einem Fehler beim Laden unserer Leistungen!
	{/await}
	<ContactSection />
</div>
