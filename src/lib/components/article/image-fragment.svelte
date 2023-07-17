<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { ContentComponentsImage } from '$lib/utils/queryCms.server';
	export let fragment: ContentComponentsImage;
	const imageSize = fragment.renderSize ?? 'medium';
	const url =
		PUBLIC_IMAGE_SERVER + fragment.image?.data?.attributes?.formats?.large?.url ??
		fragment.image?.data?.attributes?.url;
</script>

<img
	src={url}
	alt={fragment.image?.data.attributes?.alternativeText}
	class="w-full max-w-5xl mx-auto px-6"
/>
<p class="!mt-0 text-xs max-w-5xl mx-auto">{fragment.caption}</p>
