<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import IconBrandGithub from '$lib/icons/icon-brand-github.svelte';
	import IconBrandLinkedin from '$lib/icons/icon-brand-linkedin.svelte';
	import { t } from '$lib/stores/i18n';

	import type { CompanyDetailAttributes } from '$lib/utils/queryCms.server';

	export let detail: CompanyDetailAttributes;
</script>

<div id="portal-container">
	<div
		class="flex pb-40 lg:pb-20 flex-col gap-5 lg:gap-0 lg:flex-row justify-between my-10 mx-8 border-t border-slate-400/25 pt-10"
	>
		<div class="flex flex-col justify-start items-start">
			<img
				height="48"
				width="209"
				class="-ml-1"
				src={`${PUBLIC_IMAGE_SERVER}/uploads/logo_flat_transparent_873aba95ff.svg`}
				alt=""
			/>
			<div class="tracking-tight mt-2 text-slate-700/90 font-semibold text-md">
				K7-Konzept Karlsruhe GmbH
			</div>
			<div class="text-sm text-slate-500">
				{`${detail.street} ${detail.housenumber} • ${detail.zip} ${detail.city}`}
			</div>
			<div class="text-xs text-slate-500">
				&copy; 2022-{new Date().getFullYear()}
			</div>
		</div>
		<div class="flex flex-col lg:flex-row justify-end gap-3 lg:gap-8">
			<div class="flex flex-col gap-3">
				<div class="text-slate-900 font-semibold text-lg">
					{$t.aboutUs}
				</div>
				<a href={$t.link + 'career'} class="text-sm text-slate-700">{$t.jobs.career}</a>
				<a href={$t.link + 'team'} class="text-sm text-slate-700">{$t.team.team}</a>
				<a href={$t.link + 'imprint'} class="text-sm text-slate-700">{$t.imprint}</a>
				<a href="privacy" class="text-sm text-slate-700">{$t.gdpr}</a>
			</div>
			<div class="flex flex-col gap-3">
				<div class="text-slate-900 font-semibold text-lg">
					{$t.community}
				</div>
				<a href="https://github.com/konzept7/" class="flex flex-row gap-2">
					<div class="w-5 h-5 stroke-slate-800 stroke-[1.5]">
						<IconBrandGithub />
					</div>
					<div class="text-sm text-slate-700">GitHub</div>
				</a>
				<a href="https://www.linkedin.com/company/k-7/" class="flex flex-row gap-2">
					<div class="w-5 h-5 stroke-slate-800 stroke-[1.5]">
						<IconBrandLinkedin />
					</div>
					<div class="text-sm text-slate-700">LinkedIn</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	#portal-container {
		background-size: cover;
		background-image: url('data:image/svg+xml,<svg id="visual" viewBox="0 0 900 150" width="900" height="150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 106L18.8 106C37.7 106 75.3 106 112.8 105.2C150.3 104.3 187.7 102.7 225.2 102.2C262.7 101.7 300.3 102.3 337.8 104.5C375.3 106.7 412.7 110.3 450.2 110.3C487.7 110.3 525.3 106.7 562.8 108.5C600.3 110.3 637.7 117.7 675.2 120.7C712.7 123.7 750.3 122.3 787.8 119.2C825.3 116 862.7 111 881.3 108.5L900 106L900 151L881.3 151C862.7 151 825.3 151 787.8 151C750.3 151 712.7 151 675.2 151C637.7 151 600.3 151 562.8 151C525.3 151 487.7 151 450.2 151C412.7 151 375.3 151 337.8 151C300.3 151 262.7 151 225.2 151C187.7 151 150.3 151 112.8 151C75.3 151 37.7 151 18.8 151L0 151Z" fill="%23c4cbd4"></path><path d="M0 123L18.8 121.5C37.7 120 75.3 117 112.8 117.2C150.3 117.3 187.7 120.7 225.2 123C262.7 125.3 300.3 126.7 337.8 126.3C375.3 126 412.7 124 450.2 124.2C487.7 124.3 525.3 126.7 562.8 126.5C600.3 126.3 637.7 123.7 675.2 122.5C712.7 121.3 750.3 121.7 787.8 122.7C825.3 123.7 862.7 125.3 881.3 126.2L900 127L900 151L881.3 151C862.7 151 825.3 151 787.8 151C750.3 151 712.7 151 675.2 151C637.7 151 600.3 151 562.8 151C525.3 151 487.7 151 450.2 151C412.7 151 375.3 151 337.8 151C300.3 151 262.7 151 225.2 151C187.7 151 150.3 151 112.8 151C75.3 151 37.7 151 18.8 151L0 151Z" fill="%23b1bac6"></path><path d="M0 134L18.8 133.3C37.7 132.7 75.3 131.3 112.8 129.2C150.3 127 187.7 124 225.2 123.8C262.7 123.7 300.3 126.3 337.8 127.2C375.3 128 412.7 127 450.2 127.7C487.7 128.3 525.3 130.7 562.8 129.7C600.3 128.7 637.7 124.3 675.2 123.3C712.7 122.3 750.3 124.7 787.8 126.8C825.3 129 862.7 131 881.3 132L900 133L900 151L881.3 151C862.7 151 825.3 151 787.8 151C750.3 151 712.7 151 675.2 151C637.7 151 600.3 151 562.8 151C525.3 151 487.7 151 450.2 151C412.7 151 375.3 151 337.8 151C300.3 151 262.7 151 225.2 151C187.7 151 150.3 151 112.8 151C75.3 151 37.7 151 18.8 151L0 151Z" fill="%239ea9b8"></path><path d="M0 136L18.8 135.3C37.7 134.7 75.3 133.3 112.8 133.8C150.3 134.3 187.7 136.7 225.2 136.5C262.7 136.3 300.3 133.7 337.8 133C375.3 132.3 412.7 133.7 450.2 133.2C487.7 132.7 525.3 130.3 562.8 130C600.3 129.7 637.7 131.3 675.2 132.2C712.7 133 750.3 133 787.8 132.7C825.3 132.3 862.7 131.7 881.3 131.3L900 131L900 151L881.3 151C862.7 151 825.3 151 787.8 151C750.3 151 712.7 151 675.2 151C637.7 151 600.3 151 562.8 151C525.3 151 487.7 151 450.2 151C412.7 151 375.3 151 337.8 151C300.3 151 262.7 151 225.2 151C187.7 151 150.3 151 112.8 151C75.3 151 37.7 151 18.8 151L0 151Z" fill="%238b99aa"></path><path d="M0 141L18.8 141.2C37.7 141.3 75.3 141.7 112.8 141.3C150.3 141 187.7 140 225.2 139.8C262.7 139.7 300.3 140.3 337.8 139.7C375.3 139 412.7 137 450.2 137.2C487.7 137.3 525.3 139.7 562.8 139.5C600.3 139.3 637.7 136.7 675.2 136C712.7 135.3 750.3 136.7 787.8 138.2C825.3 139.7 862.7 141.3 881.3 142.2L900 143L900 151L881.3 151C862.7 151 825.3 151 787.8 151C750.3 151 712.7 151 675.2 151C637.7 151 600.3 151 562.8 151C525.3 151 487.7 151 450.2 151C412.7 151 375.3 151 337.8 151C300.3 151 262.7 151 225.2 151C187.7 151 150.3 151 112.8 151C75.3 151 37.7 151 18.8 151L0 151Z" fill="%2379899c"></path></svg>');
	}
</style>
