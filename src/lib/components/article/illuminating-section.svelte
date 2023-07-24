<script lang="ts">
	import type { ContentFragmentsIlluminatingSection } from '$lib/utils/queryCms.server';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from '../intersection-observer.svelte';

	export let fragment: ContentFragmentsIlluminatingSection;

	import { fade, fly } from 'svelte/transition';
	let unique = {};

	function restart() {
		unique = {};
	}
</script>

<IntersectionObserver let:intersecting top={-200} onIntersectingChanged={() => restart()}>
	<div class="flex flex-col py-28 bg-gradient-to-r from-brand-700 to-cyan-950 w-full">
		<div class="flex flex-row gap-5 justify-start max-w-3xl mx-auto">
			<div class="iconContainer" class:intersecting>
				<div class="icon">
					{@html fragment.icon}
				</div>
				<span class={`glowingBg standard-bg-${fragment.gradientColor}`} />
			</div>
			{#key unique}
				<div
					in:fly={{ x: -15, delay: 200, easing: cubicInOut, duration: 600 }}
					class="flex flex-col textBlock -mt-2"
					class:intersecting
				>
					<h2 class="topic">{fragment.topic}</h2>
					<p>
						<span
							class={`text-2xl bg-clip-text text-transparent bg-gradient-to-r standard-from-${fragment.gradientColor}-medium standard-to-${fragment.color}-medium`}
							>{fragment.title}</span
						>
						<span class="text-gray-200 text-2xl ml-3">{fragment.description}</span>
					</p>
				</div>
			{/key}
		</div>
	</div>
</IntersectionObserver>

<style>
	.container {
		max-width: 800px;
	}

	.iconContainer {
		position: relative;
		transform: scale(1);
		height: 38px;
		width: 38px;
		transition-delay: 0ms;
		opacity: 0;
		transition: opacity 1s cubic-bezier(0.6, 1, 0.3, 1), transform 0.7s cubic-bezier(0.6, 1, 0.3, 1);
	}

	@media (max-width: 600px) {
		.iconContainer {
			height: 30px;
			width: 30px;
		}
	}

	.iconContainer.intersecting {
		opacity: 1;
	}

	.icon {
		@apply stroke-white;
		display: inline-block;
		overflow: visible;
		vertical-align: text-bottom;
		stroke-width: 2 !important;
		font-size: 36px;
		padding: 3px;
		width: 38px;
		height: 38px;
	}

	@media (max-width: 600px) {
		.icon {
			height: 30px;
			width: 30px;
			font-size: 32px;
		}
	}

	.glowingBg {
		box-sizing: border-box;
		position: absolute;
		top: 2px;
		left: 2px;
		z-index: -1;
		transform: translateZ(0);
		width: 38px;
		height: 38px;
		transition: opacity 2s cubic-bezier(0.6, 1, 0.3, 1), transform 0.7s cubic-bezier(0.6, 1, 0.3, 1);
		transition-delay: 200ms;
		filter: blur(18px);
	}

	@media (max-width: 600px) {
		.glowingBg {
			width: 30px;
			height: 30px;
			filter: blur(10px);
		}
	}

	.topic {
		@apply text-gray-200 text-2xl;
		letter-spacing: 2.2px;
	}
	.slideLeft {
		opacity: 1;
	}
	.textBlock {
		opacity: 0;
		transition: opacity 0.16s cubic-bezier(0.16, 1, 0.3, 1),
			transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: 600ms;
	}
	.textBlock.intersecting {
		transform: 'translateX(15px)';
		opacity: 1;
	}
</style>
