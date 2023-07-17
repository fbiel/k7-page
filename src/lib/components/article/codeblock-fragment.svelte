<script lang="ts">
	import type { ContentFragmentsCodeblock } from '$lib/utils/queryCms.server';
	import '$lib/prism-css/prism.css';
	export let fragment: ContentFragmentsCodeblock;
</script>

<pre
	class="!break-before-auto mx-auto text-sm max-w-5xl bg-stone-50 rounded-xl border border-stone-300 p-6 overflow-scroll mt-10"><code
		class={`language-${fragment.lang}`}>{@html fragment.code}</code
	></pre>
<p class="text-sm text-brand-400 !mt-2 max-w-5xl mx-auto">
	{fragment.caption}
</p>
