<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import BlogSection from './blog-section.svelte';
	import ContactSection from './contact-section.svelte';
	import Hero from './hero.svelte';
	import References from './references.svelte';
	import ServiceSection from './service-section.svelte';
	export let data: PageData;
	export let form: ActionData;
</script>

{#if data?.jobs && data.slideShow}
	<Hero jobCount={data.jobs?.length ?? 0} current={data.randomCover} />
{:else}
	<Hero />
{/if}
<div class="flex flex-col gap-24">
	{#if data?.references}
		<References references={data.references} />
	{/if}

	{#if data?.departments}
		<ServiceSection services={data.departments} />
	{/if}

	{#if data?.articles}
		<BlogSection posts={data.articles.data} />
	{/if}
	{#if data?.details}
		<ContactSection {form} detail={data.details.data.attributes} />
	{/if}
</div>
