<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import Fragment from '$lib/components/article/fragment.svelte';
	import { t } from '$lib/stores/i18n';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {data.department?.attributes.name ?? $page.params.department}</title>
</svelte:head>

{#if data.department}
	<div class="mx-auto max-w-5xl py-8 px-4 lg:grid lg:grid-cols-2 lg:gap-x-8">
		<div class="lg:max-w-lg lg:self-end my-auto">
			<nav aria-label="Breadcrumb">
				<ol role="list" class="flex items-center space-x-8 list-none divide-x divide-slate-300">
					<li class="list-none">
						<div class="flex items-center text-sm">
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
						<p class="text-base text-gray-500">{data.department.attributes.catchphrase}</p>
					</div>
				</div>
			</section>
		</div>
		<div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
			<div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
				<img
					src={PUBLIC_IMAGE_SERVER + data.department.attributes.cover.data.attributes?.url}
					alt={data.department.attributes.cover.data.attributes?.alternativeText}
					class="h-full w-full object-cover object-center"
				/>
			</div>
		</div>
	</div>
	{#each data.department.attributes.body ?? [] as component}
		<Fragment {component} />
	{/each}
{/if}
