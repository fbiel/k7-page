<script lang="ts">
	import type { ContentFragmentsParagraph } from '$lib/utils/queryCms.server';
	export let paragraph: ContentFragmentsParagraph;
	export let wide = false;

	const highlighted = paragraph.highlight ?? false;
</script>

<!-- py-24 from-brand-700 to-cyan-950 bg-gradient-to-tr -->
<div
	class:max-w-3xl={!wide && !highlighted}
	class:py-24={highlighted}
	class:py-12={!highlighted}
	class:from-brand-700={highlighted}
	class:to-cyan-950={highlighted}
	class:bg-gradient-to-r={highlighted}
	class:w-full={highlighted}
	class:max-w-5xl={wide && !highlighted}
	class="flex flex-col mx-auto px-6"
>
	<h2 class:white={highlighted} class:mx-auto={highlighted} class="max-w-5xl">{paragraph.title}</h2>
	<div
		class:white={highlighted}
		class:mx-auto={highlighted}
		class="text-xl my-8 max-w-5xl !leading-7"
	>
		{@html paragraph.content}
	</div>
</div>

<style>
	.white {
		color: white !important;
	}
</style>
