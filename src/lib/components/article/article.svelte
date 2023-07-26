<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import type { ListArticleResponseItem } from '$lib/utils/queryCms.server';
	import Fragment from './fragment.svelte';
	import { createSourceset } from '$lib/utils/media';
	import AuthorChip from './author-chip.svelte';

	export let article: ListArticleResponseItem;
	export let wide = false;
	export let id: number;
</script>

<div class:max-w-5xl={wide} class="flex flex-col gap-0 px-6 max-w-3xl mx-auto">
	{#if article.author}
		<AuthorChip author={article.author?.data} />
	{/if}
	<div class="flex flex-row flex-wrap gap-1 mt-1 mb-5 w-full">
		{#each article.departments?.data ?? [] as department}
			<a
				href={`${$t.link}services/${department.attributes.route ?? ''}`}
				class="rounded-md bg-brand-100/50 !px-2 !py-1 lg:font-semibold text-xs lg:text-sm text-brand-900 border-brand-200/50
										transition-colors border hover:bg-brand-100">{department.attributes.name}</a
			>
		{/each}
	</div>
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
	{#if article.article_collection}
		{@const collection =
			article.article_collection?.data?.attributes?.blogs?.data.filter((b) => b.id !== id) ?? []}

		<div class=" mb-8 flex flex-col">
			<p class="font-light tracking-tight !mb-0 italic">{$t.article.partOfSeries}:</p>
			<p class="font-semibold !mt-0 text-lg">{article.article_collection.data.attributes.name}</p>
			{#if collection.length > 0}
				{#each collection as blog, index}
					<a
						href={`${$t.link}blog/${blog.attributes.slug ?? blog.id}`}
						class="text-brand-500 ml-3 hover:underline !mt-0 !pt-0"
					>
						{$t.article.part}
						{index + 1}: {blog.attributes.title}
					</a>
				{/each}
			{:else}
				<p class="font-light">{$t.article.moreFollowing}</p>
			{/if}
		</div>
	{/if}
	<div class="prose w-full mb-5">
		<p class="mx-auto text-lg">{article.description}</p>
	</div>
	{#if article.cover?.data?.attributes}
		{@const sourceSet = createSourceset(article.cover.data.attributes)}
		{#if sourceSet}
			<div class="flex flex-col gap-1">
				<img
					src={sourceSet.src}
					alt={sourceSet.alt}
					srcset={sourceSet.srcset}
					sizes={sourceSet.sizes}
					width="100%"
					class="w-full rounded-lg lg:rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
				/>
				<p class="text-sm text-gray-600 !mt-0 !pt-0">
					{article.cover.data.attributes.caption ?? ''}
				</p>
			</div>
		{/if}
	{/if}
</div>
<div class="mt-16" />
{#each article.content ?? [] as component}
	<Fragment {wide} {component} />
{/each}
