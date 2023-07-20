<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { createSourceset } from '$lib/utils/media';
	import type { ContentComponentsImage } from '$lib/utils/queryCms.server';
	export let fragment: ContentComponentsImage;
	const imageSize = fragment.renderSize ?? 'medium';
	const sourceSet = createSourceset(fragment.image?.data.attributes);
</script>

<div class="flex flex-col gap-1 px-6 max-w-3xl mx-auto">
	<img
		src={sourceSet.src}
		alt={sourceSet.alt}
		srcset={sourceSet.srcset}
		sizes={sourceSet.sizes}
		class="w-full mx-auto rounded-lg lg:rounded-2xl"
	/>
	<p class="!mt-0 text-xs">{fragment.caption}</p>
</div>
