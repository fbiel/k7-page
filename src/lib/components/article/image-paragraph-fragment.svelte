<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { ContentFragmentsImageParagraph } from '$lib/utils/queryCms.server';
	export let fragment: ContentFragmentsImageParagraph;
	const imageSize = fragment.renderSize ?? 'medium';
	const url =
		PUBLIC_IMAGE_SERVER + fragment.image?.data?.attributes?.formats?.large?.url ??
		fragment.image?.data?.attributes?.url;
</script>

<img
	src={url}
	alt={fragment.image?.data?.attributes?.alternativeText}
	class="w-full rounded-xl shadow-md shadow-neutral-200 !mb-2 max-w-5xl mx-auto px-6"
/>

<p class="!mt-0 text-sm max-w-5xl mx-auto px-6">{fragment.caption}</p>
<div class="prose text-lg my-8 max-w-5xl mx-auto px-6">{@html fragment.content}</div>
