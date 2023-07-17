<script lang="ts">
	import type { ContentFragmentsParagraph } from '$lib/utils/queryCms.server';
	export let paragraph: ContentFragmentsParagraph;
</script>

<div />
<h2 class:!gradient={paragraph.highlight} class="max-w-5xl px-6 mx-auto">{paragraph.title}</h2>
<div class="prose max-w-5xl px-6 mx-auto text-lg my-8">
	{@html paragraph.content}
</div>
