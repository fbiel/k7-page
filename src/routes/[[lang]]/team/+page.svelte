<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="max-w-5xl mx-auto flex flex-col gap-3 justify-start">
	<div class="py-24 sm:py-32">
		<div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
			<div class="max-w-2xl">
				<h2 class="gradient !leading-8">Triff unser Führungsteam</h2>
				<p class="mt-6 text-lg leading-8">
					Unser Führungsteam besteht aus talentierten und leidenschaftlichen Menschen, die sich
					dafür einsetzen, das bestmögliche Erlebnis für unsere Kunden und unsere Mitarbeiter zu
					schaffen.
				</p>
			</div>
			<ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
				{#await data?.lazy?.team then team}
					{#each team?.data ?? [] as member}
						<li class="!list-none">
							<div class="flex items-center gap-x-6">
								<img
									class="h-24 w-24 rounded-full"
									src={PUBLIC_IMAGE_SERVER +
										member.attributes.thumbnail?.data.attributes?.formats?.thumbnail?.url}
									alt={member.attributes.thumbnail?.data.attributes?.alternativeText}
								/>
								<div>
									<h3 class="text-base font-semibold leading-7 tracking-tight">
										{member.attributes.name}
									</h3>
									<p class="text-sm font-semibold leading-6 text-brand-400">
										{member.attributes.position}
									</p>
								</div>
							</div>
						</li>
					{/each}
				{/await}
			</ul>
		</div>
	</div>
	<p>
		Du möchtest dein Bild auch hier sehen? <a href="/career" class="underline"
			>Dann bewirb dich jetzt!</a
		>
	</p>
</div>
