<script lang="ts">
	import ArticleGrid from '$lib/components/article-grid.svelte';
	import type { ListArticleResponse } from '$lib/utils/queryCms.server';

	export let posts: ListArticleResponse;
	posts.data = posts.data.slice(0, 3);
</script>

<div class="mx-auto max-w-5xl px-6 lg:px-8">
	<ArticleGrid {posts} type="blog" withPagination={false} />
</div>
