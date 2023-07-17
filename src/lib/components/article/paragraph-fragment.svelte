<script lang="ts">
	import type { ContentFragmentsParagraph } from '$lib/utils/queryCms.server';
	export let paragraph: ContentFragmentsParagraph;
</script>

<div class="flex flex-col mx-auto max-w-3xl px-6">
	<h2 class:!gradient={paragraph.highlight}>{paragraph.title}</h2>
	<div class="text-lg my-8 prose">
		{@html paragraph.content}
	</div>
</div>
