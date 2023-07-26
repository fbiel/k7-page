<script lang="ts">
	import Article from '$lib/components/article/article.svelte';
	import { t } from '$lib/stores/i18n';
	import { createArticleLd, ldStringify } from '$lib/utils/seo';

	import type { PageData } from './$types';

	export let data: PageData;
	const ld = ldStringify(createArticleLd('blog', data.slug, data.post));
</script>

<div class="mt-8" />
<svelte:head>
	<title>{data?.post?.title}</title>
	<meta name="description" content={$t.meta.projectEntry + ': ' + data?.post?.description} />
	{@html ld}
</svelte:head>
{#if data?.post}
	<Article article={data.post} id={data.id} />
{/if}
