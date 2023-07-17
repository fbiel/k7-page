<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import type { ContentComponentsImage } from '$lib/utils/queryCms.server';
	export let fragment: ContentComponentsImage;
	const imageSize = fragment.renderSize ?? 'medium';
	const url =
		PUBLIC_IMAGE_SERVER + fragment.image?.data?.attributes?.formats?.large?.url ??
		fragment.image?.data?.attributes?.url;
</script>

<div class="flex flex-col gap-1 px-6 max-w-3xl mx-auto">
	<img src={url} alt={fragment.image?.data.attributes?.alternativeText} class="w-full" />
	<p class="!mt-0 text-xs">{fragment.caption}</p>
</div>
