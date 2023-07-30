<script lang="ts">
	import { page } from '$app/stores';

	$: isEnglish = $page.url.pathname.startsWith('/en');

	$: currentLinkWithDifferentLanguage = isEnglish
		? $page.url.toString().replace('/en', '')
		: $page.url.toString().replace($page.url.origin, `${$page.url.origin}/en`);
</script>

<a href={currentLinkWithDifferentLanguage} data-sveltekit-reload
	><div
		class="w-6 h-6 border-[1.5px] border-black rounded-md dark:border-white items-center content-center text-xs uppercase tracking-wide
   font-bold flex justify-center text-black dark:text-white"
	>
		{isEnglish ? 'DE' : 'EN'}
	</div></a
>
