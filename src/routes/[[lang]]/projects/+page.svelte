<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import Pagination from '$lib/components/pagination.svelte';
	import { t } from '$lib/stores/i18n';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {$t.projects.projects}</title>
</svelte:head>
{#if data?.posts}
	{@const posts = data.posts}
	<div class="bg-transparent py-8">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{$t.projects.projects}
				</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					{$t.projects.selection}
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#each posts?.data ?? [] as item}
					{@const post = item.attributes}
					<article class="flex flex-col items-start justify-between">
						<div class="relative w-full">
							<img
								src={PUBLIC_IMAGE_SERVER + post.cover?.data?.attributes?.formats?.medium?.url}
								alt={post.cover?.data?.attributes?.alternativeText ?? post.title}
								class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
							/>
							<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
						</div>
						<div class="max-w-xl">
							<div class="mt-8 flex items-center gap-x-4 text-xs">
								<time dateTime={post.publishedAt ?? post.createdAt} class="text-gray-500">
									{new Date(post.publishedAt ?? post.createdAt).toLocaleDateString('de-DE', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</time>
								<a
									href={`projects/${item.id}`}
									class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
								>
									{post.departments?.data?.map((d) => d.attributes.name).join(', ') ?? ''}
								</a>
							</div>
							<a href={`projects/${item.id}`} class="group relative">
								<h3
									class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 group-hover:underline"
								>
									<span class="absolute inset-0" />
									{post.title}
								</h3>
								<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
							</a>
							<div class="relative mt-8 flex items-center gap-x-4">
								<img
									src={PUBLIC_IMAGE_SERVER +
										post.author?.data?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail
											?.url}
									alt={post.cover?.data?.attributes?.alternativeText ??
										'Profile picture of ' + post.author?.data?.attributes?.name}
									class="h-10 w-10 rounded-full bg-gray-100"
								/>
								<div class="text-sm leading-6">
									<p class="font-semibold text-gray-900 !mb-0">
										<a href={`${$t.link}team`}>
											<span class="absolute inset-0" />
											{post.author?.data?.attributes?.name}
										</a>
									</p>
									<p class="text-gray-600 !mt-0">{post.author?.data.attributes.position}</p>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
			{#if posts?.meta}
				<div class="mt-16" />
				<Pagination meta={posts?.meta} href={$page.url.href} />
			{/if}
		</div>
	</div>
{/if}
