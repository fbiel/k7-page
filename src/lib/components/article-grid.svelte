<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { createSourceset } from '$lib/utils/media';

	import Pagination from './pagination.svelte';

	import type { ListArticleResponse } from '$lib/utils/queryCms.server';
	import { t } from '$lib/stores/i18n';
	import AuthorChip from './article/author-chip.svelte';

	export let posts: ListArticleResponse;
	export let type: 'blog' | 'projects';
	export let withPagination: boolean = true;
	export let title = $t.blog.fromTheblog;
	export let description = $t.blog.benefit;
</script>

<div class="bg-transparent py-8">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{title}
			</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				{description}
			</p>
		</div>
		<div
			class:lg:grid-cols-1={(posts?.data?.length ?? 0) === 0}
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#if (posts?.data?.length ?? 0) !== 0}
				{#each posts?.data ?? [] as item}
					{@const post = item.attributes}
					{@const sourceSet = createSourceset(post.cover?.data?.attributes)}
					<article class="flex flex-col items-start justify-start">
						<a href={`${type}/${item.attributes.slug ?? item.id}`} class="relative w-full">
							{#if post.cover?.data?.attributes}
								<img
									src={sourceSet?.src}
									alt={sourceSet?.alt ?? post.title}
									srcset={sourceSet?.srcset}
									sizes={sourceSet?.sizes}
									class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
								/>
							{:else}
								<div
									class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] border-dashed border-2 border-gray-300"
								>
									<p>{$t.notFound}</p>
								</div>
							{/if}
							<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
						</a>
						<div class="max-w-xl">
							<div class="mt-8 flex items-center gap-x-4 text-sm">
								<time dateTime={post.publishedAt ?? post.createdAt} class="text-gray-500">
									{new Date(post.publishedAt ?? post.createdAt).toLocaleDateString('de-DE', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</time>
							</div>
							<a href={`${type}/${item.attributes.slug ?? item.id}`} class="group relative">
								<h3
									class="mt-3 text-lg line-clamp-2 font-semibold leading-6 text-gray-900 group-hover:text-gray-600 group-hover:underline"
								>
									<span class="absolute inset-0" />
									{post.title}
								</h3>
								<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
									{post.description}
								</p>
							</a>
							<div class="relative mt-8 flex items-center gap-x-4">
								{#if post.author}
									<AuthorChip author={post.author?.data} />
								{/if}
							</div>
							<div class="flex flex-row flex-wrap gap-1 mt-3 w-full">
								{#each post.departments?.data ?? [] as department}
									<a
										href={`${$t.link}services/${department.attributes.route ?? ''}`}
										class="rounded-md bg-brand-100/50 !px-2 !py-1 text-xs text-brand-600 border-brand-200/50
										transition-colors border hover:bg-brand-100">{department.attributes.name}</a
									>
								{/each}
							</div>
						</div>
					</article>
				{/each}
			{:else}
				<div
					class="relative my-16 block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
				>
					<span class="my-4 block text-sm font-semibold text-gray-900">{$t.notReady}</span>
					<span class="my-4 block text-sm text-gray-600">
						{$t.notReadySorry}
					</span>
				</div>
			{/if}
		</div>
		{#if posts?.meta && withPagination}
			<div class="mt-16" />
			<Pagination meta={posts?.meta} href={$page.url.href} />
		{/if}
	</div>
</div>
