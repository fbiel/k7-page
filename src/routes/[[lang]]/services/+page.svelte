<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import { createSourceset } from '$lib/utils/media';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {$t.services.services}</title>
	<meta name="description" content={$t.meta.services} />
</svelte:head>
<div class="py-8">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<p class="text-base font-semibold leading-7 !text-sky-700">{$t.services.oneHand}</p>
			<h1 class="mt-2 text-3xl font-bold tracking-tigh gradient sm:text-4xl">
				{$t.services.knowHow}
			</h1>
			<p class="text-lg mt-6 leading-8 text-slate-700">
				{$t.services.smallTeams}
			</p>
		</div>
		{#if data.departments && data.departments.length > 0}
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<div
					class="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					{#each data.departments as feature}
						{@const sourceset = createSourceset(feature.attributes?.icon?.data?.attributes)}
						<a
							href={`/${$page.params.lang ? $page.params.lang + '/' : ''}services/${
								feature.attributes.route
							}`}
							class="group/department relative pl-16"
						>
							<div class="text-base font-semibold leading-7 text-slate-600">
								<div class="absolute left-0 top-0 flex">
									<img
										src={sourceset.src}
										alt={sourceset.alt}
										srcset={sourceset.srcset}
										sizes={sourceset.sizes}
										class="h-12 w-12 items-center justify-center rounded-lg"
									/>
								</div>
								<div class="group-hover/department:underline">
									{feature.attributes?.name}
								</div>
							</div>
							<div class="mt-2 text-base leading-7 text-slate-500">
								{feature.attributes?.catchphrase}
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
