<script lang="ts">
	import type { ContentFragmentsQuote } from '$lib/utils/queryCms.server';

	export let fragment: ContentFragmentsQuote;
</script>

<blockquote
	class="!my-4 max-w-5xl mx-auto px-6 font-light tracking-wide text-2xl !border-l-4 !border-brand-200/30 !text-brand-400 !italic"
>
	{fragment.quote}
</blockquote>
<div class="pl-10 font-semibold max-w-5xl mx-auto text-brand-400">
	- {fragment.author}
</div>
