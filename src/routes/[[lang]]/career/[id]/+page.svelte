<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {data?.job?.data.attributes?.Titel ?? $t.jobs.openPositions}</title>
	<meta
		name="description"
		content={data?.job?.data.attributes?.Einleitung ?? $t.jobs.openPositions}
	/>
</svelte:head>

{#if data?.job}
	{@const j = data?.job.data?.attributes}
	<div class="container max-w-5xl mx-auto mt-12 py-8 px-5">
		<p class="text-lg font-semibold">{$t.jobs.weAreLookingFor}</p>
		<div>
			<h1 class="gradient text-xl md:text-2xl lg:text-3xl overflow-clip">{j?.Titel} (m/w/d)</h1>
		</div>
		<div>
			<dl class="grid grid-cols-1 sm:grid-cols-2">
				<div class="jobad-item dark:!border-gray-500/50 sm:col-span-1 sm:px-0">
					<dt class="text-sm leading-5 text-gray-900 dark:text-gray-300 font-extralight">
						{$t.jobs.emailTo}
					</dt>
					<dd>
						<a href="mailto:">{j?.MailAn ?? 'info@k-7.eu'}</a>
					</dd>
				</div>
				<div class="jobad-item dark:!border-gray-500/50 sm:col-span-1 sm:px-0">
					<dt class="text-sm leading-5 text-gray-900 dark:text-gray-300 font-extralight">
						{$t.jobs.contact}
					</dt>
					<dd>
						{j?.Ansprechpartner ?? 'info@k-7.eu'}
					</dd>
				</div>
				<div class="jobad-item dark:!border-gray-500/50 sm:col-span-1 sm:px-0">
					<dt class="text-sm leading-5 text-gray-900 dark:text-gray-300 font-extralight">
						{$t.jobs.location}
					</dt>
					<dd>
						{j?.Standort ?? 'Karlsruhe/Remote'}
					</dd>
				</div>
				<div class="jobad-item dark:!border-gray-500/50 sm:col-span-1 sm:px-0">
					<dt class="text-sm leading-5 text-gray-900 dark:text-gray-300 font-extralight">
						{$t.jobs.earliestStart}
					</dt>
					<dd>
						{j?.GesuchtAb ? new Date(j?.GesuchtAb).toLocaleDateString('de') : 'sofort'}
					</dd>
				</div>
				{#if j?.Einleitung}
					<div class="jobad-item dark:!border-gray-500/50 sm:col-span-2 sm:px-0">
						<dt class="text-sm leading-5 text-gray-900 dark:text-gray-300 font-extralight">
							{$t.jobs.about}
						</dt>
						<dd>
							{j?.Einleitung}
						</dd>
					</div>
				{/if}
			</dl>
			<div class="grid grid-cols-1 sm:grid-cols-2">
				<div class="jobad-item dark:!border-gray-500/50 sm:col-span-2 sm:px-0">
					<h2 class="!text-lg underline underline-offset-2 tracking-tighter">
						{$t.jobs.yourProfile}
					</h2>
					<div>
						{@html j?.Profil}
					</div>
				</div>
				<div class="jobad-item dark:!border-gray-500/50 sm:col-span-2 sm:px-0">
					<h3 class="!text-lg underline underline-offset-2 tracking-tighter">
						{$t.jobs.yourTasks}
					</h3>
					<div>
						{@html j?.Aufgaben}
					</div>
				</div>
			</div>
		</div>
		<p class="my-5 text-xl font-semibold">
			{$t.jobs.soundsLikeYou}
			<a href={`mailto:${j?.MailAn ?? 'info@k-7.eu'}`}>
				{j?.MailAn ?? 'info@k-7.eu'}
			</a>.
		</p>
	</div>
{/if}

<style>
	dd {
		@apply text-lg leading-6 opacity-75;
	}
	.jobad-item {
		@apply border-t border-gray-100 px-4 py-6;
	}
</style>
