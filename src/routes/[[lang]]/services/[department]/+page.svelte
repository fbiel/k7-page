<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import Fragment from '$lib/components/article/fragment.svelte';
	import { t } from '$lib/stores/i18n';
	import { createSourceset } from '$lib/utils/media';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {data.department?.attributes.name ?? $page.params.department}</title>
	<meta
		name="description"
		content={$t.meta.serviceEntry + ' ' + data?.department?.attributes?.catchphrase}
	/>
</svelte:head>

{#if data.department}
	{@const sourceSet = createSourceset(data.department.attributes.cover.data.attributes)}
	<div class="mx-auto py-16 lg:gap-x-8">
		<div class="px-6 max-w-5xl mx-auto">
			<nav aria-label="Breadcrumb">
				<ol role="list" class="flex items-center space-x-8 list-none divide-x divide-slate-300">
					<li class="list-none">
						<div class="flex items-center text-sm !-ml-3">
							<a
								href={`/${$page.params.lang ? $page.params.lang + '/' : ''}services`}
								class="font-medium text-gray-500 hover:text-gray-900">{$t.services.services}</a
							>
						</div>
					</li>
					<li class="list-none !ml-3 !pl-3">
						<div class="flex items-center text-sm">
							<a
								href={`/${$t.link}services/${data.department.attributes.route}`}
								class="font-medium text-gray-500 hover:text-gray-900"
								>{data.department.attributes.name}</a
							>
						</div>
					</li>
				</ol>
			</nav>
			<div>
				<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{data.department.attributes.name}
				</h1>
			</div>
			<section aria-labelledby="information-heading" class="mt-4">
				<h2 id="information-heading" class="sr-only">Product information</h2>
				<div class="flex items-center">
					<div class="mt-4 space-y-6">
						<p class="text-xl italic text-gray-700">
							{data.department.attributes.catchphrase}
						</p>
					</div>
				</div>
			</section>
		</div>
		{#if data.department?.attributes?.carouselImages?.data}
			{@const carouselImages = data.department.attributes.carouselImages.data.map((image) => {
				return createSourceset(image.attributes);
			})}
			<ul
				class="mt-12 mb-4 flex -mx-4 justify-center gap-5 overflow-hidden py-4 sm:gap-8 list-none"
			>
				{#each carouselImages as image}
					<li
						class="relative aspect-[9/10] w-44 flex-none overflow-hidden bg-gray-50 rounded-xl
					sm:w-72 sm:rounded-2xl even:rotate-2 odd:-rotate-2 list-none"
					>
						<img
							alt={image?.alt}
							loading="lazy"
							decoding="async"
							class="absolute inset-0 h-full w-full object-cover"
							style="color:transparent"
							width="100%"
							src={image?.formats?.small
								? PUBLIC_IMAGE_SERVER + image.formats.small.url
								: image?.src}
						/>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	{#each data.department.attributes.body ?? [] as component}
		<Fragment wide {component} />
	{/each}
	<div class="relative py-16">
		<div class="absolute inset-x-0 top-0 hidden h-1/2 lg:block" aria-hidden="true" />
		<div class="mx-auto max-w-5xl bg-brand-500 lg:bg-transparent lg:px-8">
			<div class="lg:grid lg:grid-cols-12">
				<div
					class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16"
				>
					<div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
					<div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
						<div class="aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1">
							<img
								class="rounded-3xl object-cover object-center shadow-brand-600/50 shadow-md"
								src={PUBLIC_IMAGE_SERVER + '/uploads/medium_project_a9ff9dece0.webp'}
								alt="An office desk with two laptops on the left side, and a paper in the center, two people on the right side pointing at the paper"
							/>
						</div>
					</div>
				</div>

				<div
					class="relative lg:bg-gradient-to-br to-brand-700 shadow-md shadow-brand-400
					 from-brand-500 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl"
				>
					<div
						class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
						aria-hidden="true"
					>
						<svg
							class="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
							width="404"
							height="384"
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-brand-400/25"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
						</svg>
						<svg
							class="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
							width="404"
							height="384"
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-brand-400/25"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
						</svg>
					</div>
					<div
						class="relative mx-auto max-w-md space-y-6 lg:my-16 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0"
					>
						<h2 class="text-3xl font-bold tracking-tight text-white" id="join-heading">
							{$t.department.talkAboutProject}
						</h2>
						<p class="text-lg text-white">
							{$t.department.interesting}
						</p>
						<div class="flex flex-col pt-6 pb-8">
							<p class="border-l-4 border-white/40 font-semibold text-white pl-3 mb-2">
								Goodspaces Karlsruhe
							</p>
							<p class="text-white/80 !my-0">
								{$page.data.details?.data?.attributes?.street ?? 'Roonstr.'}
								{$page.data.details?.data?.attributes?.housenumber ?? '23a'}
							</p>
							<p class="text-white/80 !my-0">
								{$page.data.details?.data?.attributes?.zip ?? '76137'}
								{$page.data.details?.data?.attributes?.city ?? 'Karlsruhe'}
							</p>
						</div>
						<a
							class="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-brand-700 shadow-md hover:bg-gray-200 sm:inline-block sm:w-auto"
							href="/#contact-section">{$t.department.writeMessage}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
