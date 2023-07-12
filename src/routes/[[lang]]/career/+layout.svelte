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
			name: 'Flexible Arbeitszeiten',
			description:
				'Wir bieten flexible Arbeitszeiten mit Gleitzeit und Überstundenabbau, damit du deine Arbeit und dein Privatleben in Einklang bringen kannst.',
			icon: IconClockRecord
		},
		{
			name: 'Homeoffice',
			description:
				'Jeder Mitarbeiter erhält einen Laptop. Wir haben unsere Infrastruktur so optimiert, dass du von überall aus arbeiten kannst.',
			icon: IconHomeHeart
		},
		{
			name: 'Weiterbildung',
			description:
				'Jeder unserer Mitarbeiter kennt sich in Disziplinen außerhalb seines Fachgebiets aus. Wir unterstützen dich bei der Weiterbildung.',
			icon: IconSchool
		},
		{
			name: 'Zentrale Lage',
			description:
				'Unser Büro liegt zentral in Karlsruhe in der Nähe des ZKM und ist gut mit den öffentlichen Verkehrsmitteln erreichbar.',
			icon: IconTrack
		},
		{
			name: 'Obst und Getränke',
			description:
				'Alle Mitarbeiter erhalten kostenlos Obst und Wasser, Kaffee sowie verschiedene Kaltgetränke.',
			icon: IconCherry
		},
		{
			name: 'Ergonomische Arbeitsplätze',
			description:
				'Jeder Arbeitsplatz ist mit 2 Monitoren und einem höhenverstellbaren Schreibtisch ausgestattet.',
			icon: IconHeartbeat
		}
	];
</script>

<slot />
<div class="container max-w-5xl mx-auto py-8 px-5">
	<h3>Wir bieten dir</h3>
	<p class="relative mt-6 text-md leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
		Unser Team besteht aus Menschen unterschiedlicher Hintergründe, Expertisen und Perspektiven. Wir
		schätzen Vielfalt und glauben daran, dass Innovation durch den Austausch verschiedener Ideen und
		Sichtweisen entsteht. Bei uns findest du eine offene, dynamische Arbeitsumgebung, in der du
		deine Ideen einbringen und gemeinsam mit einem engagierten Team an spannenden Projekten arbeiten
		kannst.
	</p>
	<div class="px-6 lg:px-8 py-12">
		<dl
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base
       text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12"
		>
			{#each features as feature}
				<div class="flex flex-col gap-2">
					<dt class="flex flex-row gap-3 font-semibold text-gray-900 justify-start items-center">
						<div
							class="shadow-inner shadow-neutral-300 inline-block w-8 h-8 p-1 border border-brand-700/70 rounded-md stroke-brand-700/70 stroke-[1.5]"
						>
							<svelte:component this={feature.icon} />
						</div>
						<div class="text-lg !text-gray-800/80 leading-5">
							{feature.name}
						</div>
					</dt>
					{' '}
					<dd class="text-md text-gray-700/80 font-light leading-8">{feature.description}</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>

<style>
</style>
