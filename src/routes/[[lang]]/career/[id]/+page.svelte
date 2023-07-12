<script lang="ts">
	import type { ListJobsResponseItem } from '$lib/utils/queryCms.server';
	import type { PageData } from './$types';
	export let data: PageData;
	export let jobjob: ListJobsResponseItem;
</script>

{#await data?.lazy?.job then j}
	{#if j}
		<div class="container max-w-5xl mx-auto mt-12 py-8 px-5">
			<h6>Zur Zeit suchen wir:</h6>
			<div class="px-4 sm:px-0">
				<h3>{j?.data?.attributes?.Titel} (m/w/d)</h3>
			</div>
			<div class="mt-6">
				<dl class="grid grid-cols-1 sm:grid-cols-2">
					<div class="jobad-item sm:col-span-1 sm:px-0">
						<dt class="text-sm leading-5 text-gray-900 font-extralight">Email an</dt>
						<dd>
							{j?.data?.attributes?.MailAn ?? 'info@k-7.eu'}
						</dd>
					</div>
					<div class="jobad-item sm:col-span-1 sm:px-0">
						<dt>Ansprechpartner</dt>
						<dd>
							{j?.data?.attributes?.Ansprechpartner?.data?.attributes?.name ?? 'info@k-7.eu'}
						</dd>
					</div>
					<div class="jobad-item sm:col-span-1 sm:px-0">
						<dt>Standort</dt>
						<dd>
							{j?.data?.attributes?.Standort ?? 'Karlsruhe/Remote'}
						</dd>
					</div>
					<div class="jobad-item sm:col-span-1 sm:px-0">
						<dt>Verfügbar ab</dt>
						<dd>
							{j?.data?.attributes?.GesuchtAb
								? new Date(j?.data?.attributes?.GesuchtAb).toLocaleDateString('de')
								: 'sofort'}
						</dd>
					</div>
					{#if j?.data?.attributes?.Einleitung}
						<div class="jobad-item sm:col-span-2 sm:px-0">
							<dt>Über diesen Job</dt>
							<dd>
								{j?.data?.attributes?.Einleitung}
							</dd>
						</div>
					{/if}
					<div class="jobad-item sm:col-span-2 sm:px-0">
						<dt class="!text-lg underline underline-offset-2 tracking-tighter">Ihr Profil</dt>
						<dd>
							{@html j?.data?.attributes?.Profil}
						</dd>
					</div>
					<div class="jobad-item sm:col-span-2 sm:px-0">
						<dt class="!text-lg underline underline-offset-2 tracking-tighter">Ihre Aufgaben</dt>
						<dd>
							{@html j?.data?.attributes?.Aufgaben}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	{/if}
{/await}

<style>
	dt {
		@apply text-sm leading-5 text-gray-900 font-extralight;
	}
	dd {
		@apply text-lg leading-6;
	}
	.jobad-item {
		@apply border-t border-gray-100 px-4 py-6;
	}
</style>
