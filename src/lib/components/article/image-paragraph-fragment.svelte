<script lang="ts">
	import { createSourceset } from '$lib/utils/media';
	import type { ContentFragmentsImageParagraph } from '$lib/utils/queryCms.server';

	export let fragment: ContentFragmentsImageParagraph;
	export let wide = false;

	if (!fragment?.image?.data?.attributes) {
		console.error('ImageParagraphFragment: image is missing');
	}

	const sourceSet = createSourceset(fragment?.image?.data?.attributes);
</script>

<div class:max-w-5xl={wide} class="flex flex-col gap-1 px-6 max-w-3xl mx-auto prose">
	{#if sourceSet}
		<img
			src={sourceSet.src}
			alt={sourceSet.alt}
			srcset={sourceSet.srcset}
			sizes={sourceSet.sizes}
			class="w-full mx-auto rounded-lg lg:rounded-2xl"
		/>
		<p class="!mt-0 text-sm">{fragment.caption}</p>
	{/if}
	<div class="text-lg my-8">{@html fragment.content}</div>
</div>
