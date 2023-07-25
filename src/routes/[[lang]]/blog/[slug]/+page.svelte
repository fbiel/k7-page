<script lang="ts">
	import { page } from '$app/stores';
	import Article from '$lib/components/article/article.svelte';
	import { createArticleLd, createBreadcrumbLd, ldStringify } from '$lib/utils/seo';

	import type { PageData } from './$types';

	export let data: PageData;
	const articleLd = ldStringify(createArticleLd('blog', data.slug, data.post));
	const breadcrumbLd = ldStringify(createBreadcrumbLd('blog', data.post?.title ?? '', $page.params.slug));
</script>

<div class="mt-8" />
<svelte:head>
	<title>{data?.post?.title}</title>
	<meta name="description" content={data?.post?.description} />
	{@html articleLd}
</svelte:head>
{#if data?.post}
	<Article article={data.post} />
{/if}
