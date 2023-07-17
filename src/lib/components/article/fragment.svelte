<script lang="ts">
	import type { BodyItem } from '$lib/utils/queryCms.server';
	import CodeblockFragment from './codeblock-fragment.svelte';
	import IlluminatingSection from './illuminating-section.svelte';
	import ImageFragment from './image-fragment.svelte';
	import ImageParagraphFragment from './image-paragraph-fragment.svelte';
	import ParagraphFragment from './paragraph-fragment.svelte';
	import QuoteFragment from './quote-fragment.svelte';

	export let component: BodyItem;
</script>

{#if component.__component === 'content-fragments.section' || component.__component === 'content-fragments.paragraph'}
	<ParagraphFragment paragraph={component} />
{:else if component.__component === 'content-fragments.image'}
	<ImageFragment fragment={component} />
{:else if component.__component === 'content-fragments.image-paragraph'}
	<ImageParagraphFragment fragment={component} />
{:else if component.__component === 'content-fragments.quote'}
	<QuoteFragment fragment={component} />
{:else if component.__component === 'content-fragments.codeblock'}
	<CodeblockFragment fragment={component} />
{:else if component.__component === 'content-fragments.illuminating-section'}
	<IlluminatingSection fragment={component} />
{/if}
