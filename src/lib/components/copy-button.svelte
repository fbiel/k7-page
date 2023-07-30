<script lang="ts">
	import { draw, fade } from 'svelte/transition';

	function copyToClipboard() {
		if ('clipboard' in navigator) {
			navigator.clipboard.writeText(copyText);
			copied = {};
		}
	}
	let copied = {};
	export let copyText = '';
</script>

{#key copied}
	<button
		in:fade={{ duration: 200, delay: 200 }}
		on:click={copyToClipboard}
		class="w-10 h-10 p-2 dark:hover:bg-brand-600 hover:bg-neutral-200 hover:animate-pulse
			 rounded-md stroke-black dark:stroke-white stroke-[1.5] hidden md:block transition-colors"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path in:draw={{ duration: 200, delay: 600 }} stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				in:draw={{ duration: 200, delay: 400 }}
				d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
			/>
			<path
				in:draw={{ duration: 200 }}
				d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
			/>
			<path in:draw={{ duration: 200 }} d="M9 12h6" />
			<path in:draw={{ duration: 200, delay: 200 }} d="M9 16h6" />
		</svg>
	</button>
{/key}
