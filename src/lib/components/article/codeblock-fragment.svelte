<script lang="ts">
	import type { ContentFragmentsCodeblock } from '$lib/utils/queryCms.server';
	import '$lib/prism-css/prism.css';

	export let fragment: ContentFragmentsCodeblock;
	export let wide = false;
</script>

<div class:max-w-5xl={wide} class="flex flex-col gap-1 px-2 lg:px-6 max-w-3xl mx-auto">
	<pre
		class="!break-before-auto w-full mx-auto max-w-3xl bg-stone-50 rounded-xl border border-stone-300 p-2 lg:p-3 overflow-x-scroll mt-10"><code
			class={`language-${fragment.lang}`}>{@html fragment.code}</code
		></pre>
	<p class="text-sm text-brand-400 !mt-2 max-w-3xl">
		{fragment.caption}
	</p>
</div>
