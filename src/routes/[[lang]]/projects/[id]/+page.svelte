<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import Article from '$lib/components/article/article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto mt-10">
	{#await data?.lazy?.post then post}
		{#if post}
			<Article article={post} lang={$page.data.lang} />
		{/if}
	{/await}
</div>
