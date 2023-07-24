<script lang="ts">
	import { createSourceset } from '$lib/utils/media';
	import type { ContentComponentsImage } from '$lib/utils/queryCms.server';
	export let fragment: ContentComponentsImage;
	const sourceSet = createSourceset(fragment.image?.data.attributes);

	export let wide = false;
</script>

{#if sourceSet}
	<div class:max-w-5xl={wide} class="flex flex-col gap-1 px-6 max-w-3xl mx-auto">
		<img
			src={sourceSet.src}
			alt={sourceSet.alt}
			srcset={sourceSet.srcset}
			sizes={sourceSet.sizes}
			class="w-full mx-auto rounded-lg lg:rounded-2xl"
		/>
		<p class="!mt-0 text-xs">{fragment.caption}</p>
	</div>
{/if}
