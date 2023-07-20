<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import { createSourceset } from '$lib/utils/media';
	import type { DepartmentResponseItem } from '$lib/utils/queryCms.server';

	export let services: DepartmentResponseItem[] | undefined;
</script>

<div class="py-24 from-brand-700 to-cyan-950 bg-gradient-to-tr">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-sky-200">{$t.services.oneHand}</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-sky-300 sm:text-4xl">
				{$t.services.knowHow}
			</p>
			<p class="text-lg mt-6 leading-8 text-slate-200">
				{$t.services.smallTeams}
			</p>
		</div>
		{#if services && services.length > 0}
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<div
					class="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					{#each services as feature}
						{@const sourceset = createSourceset(feature.attributes?.icon?.data?.attributes)}
						<a href={`${$t.link}services/${feature.attributes.route}`} class="relative pl-16 group">
							<div class="text-base font-semibold leading-7 text-slate-100 group-hover:underline">
								<div class="absolute left-0 top-0 flex">
									<img
										src={sourceset.src}
										alt={sourceset.alt}
										srcset={sourceset.srcset}
										sizes={sourceset.sizes}
										class="h-12 w-12 items-center justify-center rounded-lg"
									/>
								</div>
								{feature.attributes?.name}
							</div>
							<div class="mt-2 text-base leading-7 text-slate-300">
								{feature.attributes?.catchphrase}
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
