<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { ListReferencesResponse } from '$lib/utils/queryCms.server';
	import { stringify } from 'postcss';
	import { flip } from 'svelte/animate';
	import { cubicInOut, linear, quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	export let references: ListReferencesResponse;
	let listLength = 5;
	let swappingList = references.data.slice(0, listLength).map((r) => r.attributes);

	let interrupted = false;

	let currentIndex = listLength - 1;
	setInterval(() => {
		if (interrupted) return;
		if (listLength >= references.data.length) return;
		// fifo reference list, but in a circular way
		currentIndex = (currentIndex + 1) % references.data.length;
		swappingList = [...swappingList.slice(1), references.data[currentIndex].attributes];
	}, 5000);

	let duration = 1000;
</script>

<svelte:window
	on:visibilitychange={() => (interrupted = window.document.visibilityState === 'hidden')}
/>

<div class="container mx-auto max-w-5xl hidden lg:block">
	<h4 class="text-center my-5 text-sm text-slate-700/60 italic">Unsere Kunden:</h4>
	<ul class="flex justify-around list-none items-center">
		{#each swappingList as reference (reference.companyName)}
			<li
				animate:flip={{ delay: 0, duration }}
				in:fly={{ x: 100, duration }}
				out:fade={{ duration: duration * 0.5, easing: quintOut }}
				class="border border-neutral-300 bg-gray-200/70 w-32 h-32 rounded-lg p-4 flex shadow-neutral-300 shadow-sm"
			>
				<img
					class="ref-image w-24 m-auto brightness-50"
					src={PUBLIC_IMAGE_SERVER + reference.logo?.data.attributes?.url}
					alt={reference.logo?.data.attributes?.alternativeText}
				/>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
