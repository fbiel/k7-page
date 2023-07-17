<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 !text-sky-400">Alles aus einer Hand</h2>
			<h3 class="mt-2 text-3xl font-bold tracking-tigh !text-cyan-500 sm:text-4xl">
				Kleine Teams, viel Know-How
			</h3>
			<p class="text-lg mt-6 leading-8 text-slate-700">
				Wir halten unsere Projektteams möglichst klein, um die Kommunikation und die Zusammenarbeit
				zu vereinfachen. Das ist möglich, weil unsere Mitarbeiter:innen über ein breites Spektrum an
				Fähigkeiten verfügen. So können wir die meisten Aufgaben inhouse erledigen und sind nicht
				auf externe Dienstleister angewiesen.
			</p>
			<p class="text-lg mt-6 leading-8 text-slate-700">
				Wir halten unsere Projektteams möglichst klein, um die Kommunikation und die Zusammenarbeit
				zu vereinfachen. Das ist möglich, weil unsere Mitarbeiter:innen über ein breites Spektrum an
				Fähigkeiten verfügen. So können wir die meisten Aufgaben inhouse erledigen und sind nicht
				auf externe Dienstleister angewiesen.
			</p>
		</div>
		{#if data.departments && data.departments.length > 0}
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl
					class="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					{#each data.departments as feature}
						<a
							href={`/${$page.params.lang ? $page.params.lang + '/' : ''}services/${
								feature.attributes.route
							}`}
							class="group/department relative pl-16"
						>
							<dt class="text-base font-semibold leading-7 text-slate-600">
								<div class="absolute left-0 top-0 flex">
									<img
										src={PUBLIC_IMAGE_SERVER + feature.attributes?.icon?.data?.attributes?.url}
										alt={feature.attributes?.icon?.data?.attributes?.alternativeText}
										class="h-12 w-12 items-center justify-center rounded-lg"
									/>
								</div>
								<div class="group-hover/department:underline">
									{feature.attributes?.name}
								</div>
							</dt>
							<dd class="mt-2 text-base leading-7 text-slate-500">
								{feature.attributes?.catchphrase}
							</dd>
						</a>
					{/each}
				</dl>
			</div>
		{/if}
	</div>
</div>
