<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import Loader from '$lib/components/loader.svelte';
	import { t } from '$lib/stores/i18n';
	import type { ListJobsResponseItem } from '$lib/utils/queryCms.server';
	import type { PageData } from './$types';
	export let data: PageData;
	export let jobjob: ListJobsResponseItem;
</script>

<div class="prose prose-slate" />
<div class=" pb-5">
	<h3 class="text-base font-semibold leading-6">Offene Stellenanzeigen</h3>
	<p class="mt-2 text-sm">
		Wir sind immer auf der Suche nach neuen Talenten. Bewerben Sie sich initiativ oder auf eine der
		hier gelisteten Stellenanzeigen und werden Sie Teil unseres Teams.
	</p>
</div>

{#await data?.lazy?.jobs}
	<Loader />
{:then jobs}
	<ul role="list" class="divide-y divide-slate-600/10">
		{#each jobs as job}
			<!-- <pre>
      {JSON.stringify(job?.attributes, null, 2)}
    </pre> -->
			<a href={`career/${job.id}`}>
				<li class="flex flex-row justify-between gap-x-6 py-5">
					<div class="flex gap-x-4">
						<img
							class="h-16 w-20 flex-none rounded-md"
							src={PUBLIC_IMAGE_SERVER +
								job?.attributes?.Beispielbild?.data?.attributes?.formats?.thumbnail?.url}
							alt=""
						/>
						<div class="min-w-0 flex-auto">
							<h5 class="text font-semibold leading-6 text-gray-900">{job.attributes.Titel}</h5>
							<p class="mt-1 truncate text-sm leading-5">
								{job.attributes.MailAn ?? 'info@k-7.eu'}
							</p>
							<p class="mt-1 text-xs leading-5 text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quidem maxime
								exercitationem corrupti minus eveniet officia veritatis ut facere odit modi
								provident. Repellat inventore optio, eos harum magni similique quaerat?
							</p>
						</div>
					</div>
					<div class="hidden sm:flex sm:flex-col sm:items-end">
						<p class="mt-1 text-xs leading-3 text-gray-500">
							Online seit <time datetime={new Date(job.attributes.GesuchtAb).toISOString()}
								>{new Date(job.attributes.GesuchtAb).toLocaleDateString('de')}</time
							>
						</p>
					</div>
				</li>
			</a>
		{/each}
	</ul>
{:catch}
	<p>
		Leider kam es zu einem Fehler beim Laden der Stellenanzeigen. Versuchen Sie es später erneut.
	</p>
{/await}
