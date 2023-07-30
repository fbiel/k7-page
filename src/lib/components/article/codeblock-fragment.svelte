<script lang="ts">
	import IconCopy from '$lib/icons/icon-copy.svelte';
	import type { ContentFragmentsCodeblockMarked } from '$lib/utils/queryCms.server';

	export let fragment: ContentFragmentsCodeblockMarked;
	export let wide = false;
	function copyToClipboard() {
		if ('clipboard' in navigator && fragment.code) {
			navigator.clipboard.writeText(fragment.code);
		}
	}
</script>

<div class="max-w-3xl mx-auto my-10 px-2 lg:px-6">
	<div
		class:max-w-5xl={wide}
		class="flex flex-col gap-1 bg-stone-50 dark:bg-brand-700 rounded-xl not-prose border border-stone-300
  dark:border-brand-600 p-2 shadow-md shadow-neutral-200 dark:shadow-brand-900"
	>
		<div class="flex flex-col">
			<pre
				id="codeblock"
				class="!break-before-auto w-full hide-scrollbar
		 overflow-x-scroll">
		 <code class={`language-${fragment.lang}`}>{@html fragment.marked}</code>
			</pre>
			<div
				class="flex -mx-2 pt-2 px-2 flex-row justify-between items-center border-t border-slate-300/50 dark:border-brand-500"
			>
				<p class="text-gray-700 text-sm dark:text-gray-300 !m-0 max-w-3xl">
					{fragment.caption}
				</p>
				<div>
					<button
						on:click={copyToClipboard}
						class="w-8 h-8 stroke-brand-600 stroke-[1.5] border border-brand-800
			bg-slate-100 p-1 rounded-md"
					>
						<IconCopy />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
