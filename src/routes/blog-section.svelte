<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { ListArticleResponseItem } from '$lib/utils/queryCms.server';

	export let posts: { attributes: ListArticleResponseItem; id: number }[] = [];
</script>

<div class="bg-transparent">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aus dem Blog</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				Profitieren Sie von unserem Wissen und unserer Erfahrung. Wir teilen unsere Erkenntnisse und
				Erfahrungen in unserem Blog.
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each posts as item}
				{@const post = item.attributes}
				<article class="flex flex-col items-start justify-between">
					<div class="relative w-full">
						<img
							src={PUBLIC_IMAGE_SERVER + post.cover?.data?.attributes?.formats?.medium?.url}
							alt={post.cover?.data?.attributes?.alternativeText}
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
								href={`blog/${post.title}`}
								class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>
								{post.departments?.data?.map((d) => d.attributes.name).join(', ') ?? ''}
							</a>
						</div>
						<div class="group relative">
							<h3
								class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
							>
								<a href={`blog/${item.id}`}>
									<span class="absolute inset-0" />
									{post.title}
								</a>
							</h3>
							<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
						</div>
						<div class="relative mt-8 flex items-center gap-x-4">
							<img
								src={PUBLIC_IMAGE_SERVER +
									post.author?.data?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail
										?.url}
								alt={post.cover?.data?.attributes?.alternativeText}
								class="h-10 w-10 rounded-full bg-gray-100"
							/>
							<div class="text-sm leading-6">
								<p class="font-semibold text-gray-900">
									<a href={`team/${post.author?.data?.id}`}>
										<span class="absolute inset-0" />
										{post.author?.data?.attributes?.name}
									</a>
								</p>
								<p class="text-gray-600">{post.author?.data.attributes.position}</p>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</div>
