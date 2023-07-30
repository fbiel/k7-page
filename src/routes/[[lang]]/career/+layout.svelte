<script>
	import { t } from '$lib/stores/i18n';
	import IconHomeHeart from '$lib/icons/icon-home-heart.svelte';
	import IconClockRecord from '$lib/icons/icon-clock-record.svelte';
	import IconTrack from '$lib/icons/icon-track.svelte';
	import IconSchool from '$lib/icons/icon-school.svelte';
	import IconCherry from '$lib/icons/icon-cherry.svelte';
	import IconHeartbeat from '$lib/icons/icon-heartbeat.svelte';
	let features = [
		{
			name: $t.jobs.features.flexibleWorkingHours.name,
			description: $t.jobs.features.flexibleWorkingHours.description,
			icon: IconClockRecord
		},
		{
			name: $t.jobs.features.homeoffice.name,
			description: $t.jobs.features.homeoffice.description,
			icon: IconHomeHeart
		},
		{
			name: $t.jobs.features.training.name,
			description: $t.jobs.features.training.description,
			icon: IconSchool
		},
		{
			name: $t.jobs.features.centralLocation.name,
			description: $t.jobs.features.centralLocation.description,
			icon: IconTrack
		},
		{
			name: $t.jobs.features.fruitAndBeverages.name,
			description: $t.jobs.features.fruitAndBeverages.description,
			icon: IconCherry
		},
		{
			name: $t.jobs.features.ergonomicWorkplace.name,
			description: $t.jobs.features.ergonomicWorkplace.description,
			icon: IconHeartbeat
		}
	];
</script>

<slot />
<div class="container max-w-5xl mx-auto py-8 px-5">
	<h3>{$t.jobs.weOffer}</h3>
	<p
		class="relative mt-6 text-md leading-8 text-gray-600 dark:text-gray-200 text-lg sm:max-w-md lg:max-w-none"
	>
		{$t.jobs.diversity}
	</p>
	<div class="px-6 lg:px-8 py-12">
		<dl
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base
       text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12"
		>
			{#each features as feature}
				<div class="flex flex-col gap-2">
					<dt class="flex flex-row gap-3 font-semibold text-gray-900 justify-start items-center">
						<div
							class="shadow-inner shadow-emerald-100 inline-block w-10 h-10 p-1 border ring-1 ring-offset-2 ring-emerald-700/70
							 border-emerald-700/70 rounded-md stroke-emerald-700/70 stroke-[1.5] dark:bg-white dark:stroke-emerald-600
							 dark:ring-emerald-600 dark:shadow-emerald-30 dark:border-emerald-600"
						>
							<svelte:component this={feature.icon} />
						</div>
						<div class="text-lg !text-gray-800/80 dark:!text-gray-200/90 leading-5">
							{feature.name}
						</div>
					</dt>
					{' '}
					<dd class="text-md text-gray-700/80 dark:text-gray-200/90 font-light text-sm leading-8">
						{feature.description}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>

<style>
</style>
