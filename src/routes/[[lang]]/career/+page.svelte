<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import Hero from './hero.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {$t.jobs.career}</title>
	<meta name="description" content={$t.meta.career} />
</svelte:head>
<div class="overflow-hidden">
	<Hero />
</div>
<div class="container max-w-5xl mx-auto pb-8 px-5">
	<div class="pb-10">
		<h2>{$t.jobs.openPositions}</h2>
		<p
			class="relative mt-6 text-md leading-8 text-gray-600 dark:text-gray-200 sm:max-w-md lg:max-w-none"
		>
			{$t.jobs.claim}
		</p>
	</div>
	{#if data?.jobs}
		{@const jobs = data.jobs}
		<ul role="list" class="px-0 pb-4">
			{#each jobs as job}
				<li
					class="flex my-5 flex-row shadow-md shadow-cyan-900/40 dark:from-brand-600 dark:to-brand-600
			from-slate-700 to-cyan-900 bg-gradient-to-tr dark:shadow-none dark:border-brand-300/50 dark:border
			justify-apart items-start gap-x-6 pt-8 pb-3 hover:ring-2 hover:ring-cyan-800 hover:ring-offset-2
			rounded-xl px-3 md:px-6"
				>
					<a href={`${$t.link}career/${job?.id}`} class="flex flex-col w-full">
						<div class="flex gap-x-4">
							<div class="min-w-0 flex-auto">
								<h3 class=" text-base lg:text-lg font-semibold leading-6 text-white my-0">
									{job?.attributes?.Titel} (m/w/d)
								</h3>
								<p class="mt-1 truncate leading-5 text-gray-400">
									{job?.attributes?.Standort ?? 'info@k-7.eu'}
								</p>
								<p class="mt-1 leading-5 text-sm lg:text-base text-gray-200">
									{job?.attributes?.Einleitung ?? ''}
								</p>
							</div>
						</div>
						<p class="leading-5 text-gray-200 text-right w-full !m-0">
							<span class="text-xs text-gray-300 text-right">Verfügbar ab: </span><time
								datetime={new Date(job?.attributes?.GesuchtAb).toISOString()}
								>{new Date(job?.attributes?.GesuchtAb).toLocaleDateString('de')}</time
							>
						</p>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
