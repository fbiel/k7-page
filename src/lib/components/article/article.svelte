<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import type { ListArticleResponseItem } from '$lib/utils/queryCms.server';
	import Fragment from './fragment.svelte';
	import { ldStringify, createArticleLd } from '$lib/utils/seo';
	import { createSourceset } from '$lib/utils/media';

	export let article: ListArticleResponseItem;
	export let id: string;

	const ld = ldStringify(createArticleLd('blog', id, article));
</script>

<svelte:head>
	<title>{article.title}</title>
	{@html ld}
</svelte:head>
<div>
	<div class="flex flex-col gap-0 px-6 max-w-3xl mx-auto">
		<p class="text-sm text-gray-600 font-light">
			{$t.article.publishedAt}
			{new Date(article.createdAt).toLocaleDateString($t.language, {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
			{#if new Date(article.updatedAt).valueOf() - new Date(article.createdAt).valueOf() > 24 * 60 * 60 * 1000}
				<span class="hidden lg:inline mx-2">•</span>
				<br class="lg:hidden" />{$t.article.updatedAt}
				{new Date(article.updatedAt).toLocaleDateString($t.language, {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			{/if}
		</p>
		<h1 class="gradient !text-3xl overflow-clip !pt-0 !mt-0">{article.title}</h1>
		<p class="mx-auto text-lg w-full prose">{article.description}</p>
		{#if article.cover?.data?.attributes}
			{@const srcset = createSourceset(article.cover.data.attributes)}
			<div class="flex flex-col gap-1">
				<img
					src={srcset.src}
					alt={srcset.alt}
					srcset={srcset.srcset}
					sizes={srcset.sizes}
					width="100%"
					class="w-full rounded-lg lg:rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
				/>
				<p class="text-sm text-gray-600 !mt-0 !pt-0">
					{article.cover.data.attributes.caption ?? ''}
				</p>
			</div>
		{/if}
	</div>
	<div class="mt-16" />
	{#each article.content ?? [] as component}
		<Fragment {component} />
	{/each}
</div>
