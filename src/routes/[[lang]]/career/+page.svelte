<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import Loader from '$lib/components/loader.svelte';
	import { t } from '$lib/stores/i18n';
	import type { ListJobsResponseItem } from '$lib/utils/queryCms.server';
	import Hero from './hero.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {$t.jobs.career}</title>
</svelte:head>
<div class="overflow-hidden">
	<Hero />
</div>
<div class="container max-w-5xl mx-auto py-8 px-5">
	<div class="pb-10">
		<h3>{$t.jobs.openPositions}</h3>
		<p class="relative mt-6 text-md leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
			{$t.jobs.claim}
		</p>
	</div>
	{#if data?.jobs}
		{@const jobs = data.jobs}
		<ul role="list" class="divide-y divide-slate-600/10 pb-10">
			{#each jobs as job}
				<li
					class="flex my-5 flex-row
			from-brand-500 to-cyan-900 bg-gradient-to-tr border-slate-300 border
			justify-apart items-start gap-x-6 py-8 hover:ring-2 hover:ring-cyan-800 hover:ring-offset-2
			rounded-xl px-3 lg:px-6"
				>
					<a href={`${$t.link}career/${job?.id}`} data-sveltekit-noscroll>
						<div class="flex gap-x-4">
							<div class="min-w-0 flex-auto">
								<h5 class="text-lg font-semibold leading-6 text-white">
									{job?.attributes?.Titel} (m/w/d)
								</h5>
								<p class="mt-1 truncate leading-5 text-gray-400">
									{job?.attributes?.Standort ?? 'info@k-7.eu'}
								</p>
								<p class="mt-1 leading-5 text-gray-300">
									{job?.attributes?.Einleitung ?? ''}
								</p>
							</div>
						</div>
						<div class="hidden sm:flex sm:flex-col sm:items-end lg:justify-start">
							<p class="leading-5 text-gray-200 text-right !m-0">
								<span class="text-xs text-gray-300">Verfügbar ab: </span><time
									datetime={new Date(job?.attributes?.GesuchtAb).toISOString()}
									>{new Date(job?.attributes?.GesuchtAb).toLocaleDateString('de')}</time
								>
							</p>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
