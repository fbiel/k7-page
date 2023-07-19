<script lang="ts">
	import ArticleGrid from '$lib/components/article-grid.svelte';
	import { t } from '$lib/stores/i18n';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>K7: Blog</title>
	<meta name="description" content={$t.meta.blog} />
</svelte:head>
{#if data?.posts}
	{@const posts = data.posts}
	<ArticleGrid type="blog" {posts} />
{/if}
