<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import type { AuthorResponseItem } from '$lib/utils/queryCms.server';

	export let author: AuthorResponseItem | undefined | null = undefined;
</script>

<a href={`${$t.link}team`} class="relative flex items-center gap-x-4 lg:mb-4">
	<img
		src={PUBLIC_IMAGE_SERVER +
			author?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail?.url ??
			author?.attributes?.thumbnail?.data?.attributes?.url}
		alt={'Profile picture of ' + author?.attributes?.name}
		class="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-gray-100 dark:bg-gray-800"
	/>
	<div>
		<p class="font-semibold text-gray-900 text-sm !mb-0 leading-5 dark:text-gray-100">
			{author?.attributes?.name}
		</p>
		<p class="text-gray-600 !mt-0 text-xs leading-5 dark:text-gray-400">
			{author?.attributes.position}
		</p>
	</div>
</a>
