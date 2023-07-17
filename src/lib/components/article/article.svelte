<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { ListArticleResponseItem } from '$lib/utils/queryCms.server';
	import Fragment from './fragment.svelte';

	export let article: ListArticleResponseItem;
	export let lang = 'de';
</script>

<div>
	<p class="text-sm text-gray-600 font-light max-w-5xl mx-auto">
		Veröffentlicht am {new Date(article.createdAt).toLocaleDateString(lang ?? 'de', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
		{#if new Date(article.updatedAt).valueOf() - new Date(article.createdAt).valueOf() > 24 * 60 * 60 * 1000}
			<br />Aktualisiert am
			{new Date(article.updatedAt).toLocaleDateString(lang ?? 'de', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		{/if}
	</p>
	<h1 class="gradient !text-3xl overflow-clip max-w-5xl mx-auto">{article.title}</h1>
	<p class="max-w-5xl mx-auto">{article.description}</p>
	{#if article.cover?.data?.attributes?.formats?.medium?.url}
		{#if article.cover?.data?.attributes?.formats?.medium?.url}
			<img
				src={PUBLIC_IMAGE_SERVER + article.cover?.data?.attributes?.formats?.large?.url}
				alt={article.cover?.data?.attributes?.alternativeText}
				class="w-full max-w-5xl mx-auto rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] !mb-1"
			/>
			<p class="text-sm text-gray-600 !mt-0 !pt-0 max-w-5xl mx-auto">
				{article.cover.data.attributes.caption ?? ''}
			</p>
		{/if}
	{/if}
	{#each article.content ?? [] as component}
		<Fragment {component} />
	{/each}
</div>
