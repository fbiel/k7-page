<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { createSourceset } from '$lib/utils/media';
	import type { ContentFragmentsImageParagraph } from '$lib/utils/queryCms.server';
	export let fragment: ContentFragmentsImageParagraph;
	const imageSize = fragment.renderSize ?? 'medium';
	const url =
		PUBLIC_IMAGE_SERVER + fragment.image?.data?.attributes?.formats?.large?.url ??
		fragment.image?.data?.attributes?.url;

	const sourceSet = createSourceset(fragment.image?.data.attributes);
</script>

<div class="flex flex-col gap-1 px-6 max-w-3xl mx-auto">
	<img
		src={sourceSet.src}
		alt={sourceSet.alt}
		srcset={sourceSet.srcset}
		sizes={sourceSet.sizes}
		class="w-full mx-auto rounded-lg lg:rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
	/>

	<p class="!mt-0 text-sm">{fragment.caption}</p>
	<div class="text-lg my-8 prose">{@html fragment.content}</div>
</div>
