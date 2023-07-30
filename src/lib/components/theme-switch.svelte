<script lang="ts">
	import IconMoonStars from '$lib/icons/icon-moon-stars.svelte';
	import IconSun from '$lib/icons/icon-sun.svelte';
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<label class="swap swap-flip">
	<input
		type="checkbox"
		name="darkMode"
		id="darkMode"
		checked={darkMode}
		class="invisible"
		on:click={handleSwitchDarkMode}
	/>

	<div class="w-6 h-6 stroke-black stroke-[1.5] dark:stroke-white cursor-pointer swap-on">
		<IconMoonStars />
	</div>
	<div class="w-6 h-6 stroke-black stroke-[1.5] dark:stroke-white cursor-pointer swap-off">
		<IconSun />
	</div>
</label>

<style>
	.swap {
		@apply relative inline-grid select-none place-content-center;
	}

	.swap > * {
		@apply col-start-1 row-start-1;
	}

	.swap input {
		@apply appearance-none;
	}

	.swap .swap-on {
		@apply opacity-0;
	}

	.swap input:checked ~ .swap-off,
	.swap.swap-active .swap-off {
		@apply opacity-0;
	}

	.swap input:checked ~ .swap-on,
	.swap-active .swap-on {
		@apply opacity-100;
	}
	.swap {
		@apply cursor-pointer;
	}

	.swap > * {
		@apply duration-300 ease-out;
		transition-property: transform, opacity;
	}

	.swap-rotate .swap-on {
		@apply rotate-45;
	}

	.swap-rotate input:checked ~ .swap-off,
	.swap-rotate.swap-active .swap-off {
		@apply -rotate-45;
	}

	.swap-rotate input:checked ~ .swap-on,
	.swap-rotate.swap-active .swap-on {
		@apply rotate-0;
	}

	.swap-flip {
		transform-style: preserve-3d;
		perspective: 16em;
	}
	.swap-flip .swap-on {
		transform: rotateY(180deg);
		backface-visibility: hidden;
		@apply opacity-100;
	}

	.swap-flip input:checked ~ .swap-off,
	.swap-flip.swap-active .swap-off {
		transform: rotateY(-180deg);
		backface-visibility: hidden;
		@apply opacity-100;
	}

	.swap-flip input:checked ~ .swap-on {
		transform: rotateY(0deg);
	}
</style>
