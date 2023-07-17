<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import Article from '$lib/components/article/article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mt-8" />
{#if data?.post}
	<Article article={data.post} id={data.blogId} />
{/if}
