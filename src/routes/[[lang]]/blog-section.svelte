<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import ArticleGrid from '$lib/components/article-grid.svelte';
	import { t } from '$lib/stores/i18n';
	import { createSourceset } from '$lib/utils/media';
	import type { ListArticleResponse } from '$lib/utils/queryCms.server';

	export let posts: ListArticleResponse;
	posts.data = posts.data.slice(0, 3);
</script>

<div class="mx-auto max-w-5xl px-6 lg:px-8">
	<ArticleGrid {posts} type="blog" withPagination={false} />
</div>
