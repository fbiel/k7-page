<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import type { ListArticleResponseItem } from '$lib/utils/queryCms.server';
	import Fragment from './fragment.svelte';
	import { createSourceset } from '$lib/utils/media';

	export let article: ListArticleResponseItem;
</script>

<div>
	<div class="flex flex-col gap-0 px-6 max-w-3xl mx-auto">
		{#if article.author}
			<div class="relative mt-8 flex items-center gap-x-4">
				<img
					src={PUBLIC_IMAGE_SERVER +
						article.author?.data?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail?.url}
					alt={article.cover?.data?.attributes?.alternativeText ??
						'Profile picture of ' + article.author?.data?.attributes?.name}
					class="h-10 w-10 rounded-full bg-gray-100"
				/>
				<div class="text-sm leading-6">
					<p class="font-semibold text-gray-900 !mb-0">
						<a href={`${$t.link}team`}>
							<span class="absolute inset-0" />
							{article.author?.data?.attributes?.name}
						</a>
					</p>
					<p class="text-gray-600 !mt-0">{article.author?.data.attributes.position}</p>
				</div>
			</div>
		{/if}
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
		<div class="prose w-full mb-5">
			<p class="mx-auto text-lg">{article.description}</p>
		</div>
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
