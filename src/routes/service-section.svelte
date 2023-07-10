<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { DepartmentResponseItem } from '$lib/utils/queryCms.server';

	export let services: DepartmentResponseItem[] | undefined;
</script>

<div class="bg-transparent">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-600">Alles aus einer Hand</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Kleine Teams, viel Know-How
			</p>
			<p class="text-lg mt-6 leading-8 text-gray-600">
				Wir halten unsere Projektteams möglichst klein, um die Kommunikation und die Zusammenarbeit
				zu vereinfachen. Das ist möglich, weil unsere Mitarbeiter:innen über ein breites Spektrum an
				Fähigkeiten verfügen. So können wir die meisten Aufgaben inhouse erledigen und sind nicht
				auf externe Dienstleister angewiesen.
			</p>
			<p class="text-lg leading-8 text-gray-600 mt-4" />
		</div>
		{#if services && services.length > 0}
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl
					class="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					{#each services as feature}
						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute left-0 top-0 flex">
									<img
										src={PUBLIC_IMAGE_SERVER + feature.attributes?.icon?.data?.attributes?.url}
										alt={feature.attributes?.icon?.data?.attributes?.alternativeText}
										class="h-12 w-12 items-center justify-center rounded-lg"
									/>
								</div>
								{feature.attributes?.name}
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								{feature.attributes?.catchphrase}
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		{/if}
	</div>
</div>
