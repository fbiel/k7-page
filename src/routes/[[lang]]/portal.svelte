<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import IconBrandGithub from '$lib/icons/icon-brand-github.svelte';
	import IconBrandLinkedin from '$lib/icons/icon-brand-linkedin.svelte';
	import IconDownload from '$lib/icons/icon-download.svelte';
	import { t } from '$lib/stores/i18n';

	import type { CompanyDetailAttributes } from '$lib/utils/queryCms.server';

	export let detail: CompanyDetailAttributes;
</script>

<div id="portal-container" class="bg-portal dark:bg-portalDark bg-cover">
	<div
		class="flex pb-48 lg:pb-24 flex-col gap-5 lg:gap-0 lg:flex-row justify-between my-10 mx-8 border-t border-slate-400/25 pt-10"
	>
		<div class="flex flex-col justify-start items-start">
			<img
				height="48"
				width="209"
				class="-ml-1 block dark:hidden"
				src={`${PUBLIC_IMAGE_SERVER}/uploads/logo_flat_transparent_873aba95ff.svg`}
				alt="K7 company logo, a combination of the letter K and the number 7"
			/>
			<img
				height="48"
				width="209"
				class="-ml-1 hidden dark:block opacity-80"
				src="https://cms.k-7.eu/uploads/logo_flat_white_transparent_30d2d97bb9.svg"
				alt="K7 company logo, a combination of the letter K and the number 7"
			/>
			<div class="tracking-tight mt-2 text-slate-700/90 dark:text-white/80 font-semibold text-md">
				K7-Konzept Karlsruhe GmbH
			</div>
			<div class="text-sm text-slate-500 dark:text-slate-400">
				{`${detail.street} ${detail.housenumber} • ${detail.zip} ${detail.city}`}
			</div>
			<div class="text-xs text-slate-500 dark:text-slate-400">
				&copy; 2022-{new Date().getFullYear()}
			</div>
		</div>
		<div class="flex flex-col lg:flex-row justify-end gap-3 lg:gap-8">
			<div class="flex flex-col gap-3">
				<div class="text-slate-900 dark:text-slate-100 font-semibold text-lg">
					{$t.aboutUs}
				</div>
				<a href={$t.link + 'career'} class="text-sm text-slate-700 dark:text-slate-300/90"
					>{$t.jobs.career}</a
				>
				<a href={$t.link + 'team'} class="text-sm text-slate-700 dark:text-slate-300/90"
					>{$t.team.team}</a
				>
				<a href={$t.link + 'imprint'} class="text-sm text-slate-700 dark:text-slate-300/90"
					>{$t.imprint}</a
				>
				<a href={$t.link + 'privacy'} class="text-sm text-slate-700 dark:text-slate-300/90"
					>{$t.gdpr}</a
				>
			</div>
			<div class="flex flex-col gap-3 whitespace-nowrap">
				<div class="text-slate-900 dark:text-slate-100 font-semibold text-lg">
					{$t.community}
				</div>
				<a href={$t.link + 'downloads'} class="flex lfex-row gap-2">
					<div class="w-5 h-5 stroke-slate-800 dark:stroke-slate-300/90 stroke-[1.5]">
						<IconDownload />
					</div>
					<div class="text-sm text-slate-700 dark:text-slate-300/90">Downloads</div>
				</a>
				<a href="https://github.com/konzept7/" class="flex flex-row gap-2" target="_blank">
					<div class="w-5 h-5 stroke-slate-800 dark:stroke-slate-300/90 stroke-[1.5]">
						<IconBrandGithub />
					</div>
					<div class="text-sm text-slate-700 dark:text-slate-300/90">GitHub</div>
				</a>
				<a href="https://www.linkedin.com/company/k-7/" class="flex flex-row gap-2" target="_blank">
					<div class="w-5 h-5 stroke-slate-800 dark:stroke-slate-300/90 stroke-[1.5]">
						<IconBrandLinkedin />
					</div>
					<div class="text-sm text-slate-700 dark:text-slate-300/90">LinkedIn</div>
				</a>
			</div>
		</div>
	</div>
</div>
