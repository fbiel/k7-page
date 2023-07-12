<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="max-w-5xl mx-auto prose mt-10">
	{#await data?.lazy?.post then post}
		{#if post}
			<p class="text-sm text-gray-600 font-light">
				Veröffentlicht am {new Date(post.createdAt).toLocaleDateString($page.data.lang ?? 'de', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
				{#if new Date(post.updatedAt).valueOf() - new Date(post.createdAt).valueOf() > 24 * 60 * 60 * 1000}
					<br />Aktualisiert am
					{new Date(post.updatedAt).toLocaleDateString($page.data.lang ?? 'de', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				{/if}
			</p>
			<h1 class="gradient">{post.title}</h1>
			<p>{post.description}</p>
			{#if post.cover?.data?.attributes?.formats?.medium?.url}
				{#if post.cover?.data?.attributes?.formats?.medium?.url}
					<img
						src={PUBLIC_IMAGE_SERVER + post.cover?.data?.attributes?.formats?.large?.url}
						alt={post.cover?.data?.attributes?.alternativeText}
						class="w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] !mb-1"
					/>
					<p class="text-sm text-gray-600 !mt-0 !pt-0">
						{post.cover.data.attributes.caption ?? ''}
					</p>
				{/if}
			{/if}
		{/if}
	{/await}
</div>
