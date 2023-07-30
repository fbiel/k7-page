<script lang="ts">
	import type { ContentFragmentsQuote } from '$lib/utils/queryCms.server';

	export let fragment: ContentFragmentsQuote;
	export let wide = false;
</script>

<div class:max-w-5xl={wide} class="flex flex-col mx-auto max-w-3xl px-6">
	<blockquote
		class="!my-4 w-full font-light px-2 lg:px-8 tracking-wide text-2xl !border-l-4 !border-brand-200/30
	 dark:!border-brand-100/70 !text-brand-400 dark:!text-brand-100 !italic"
	>
		{fragment.quote}
	</blockquote>
	<div class="pl-10 font-semibold text-brand-400 dark:!text-brand-200">
		- {fragment.author}
	</div>
</div>
