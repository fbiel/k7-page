<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import type { SourceSet } from '$lib/utils/media';
	export let jobCount = 0;

	export let current: SourceSet | undefined | null = undefined;
</script>

<div class="relative isolate overflow-hidden bg-transparent">
	<svg
		class="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
		aria-hidden="true"
	>
		<defs>
			<pattern
				id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
				width="200"
				height="200"
				x="50%"
				y="-1"
				patternUnits="userSpaceOnUse"
			>
				<path d="M.5 200V.5H200" fill="none" />
			</pattern>
		</defs>
		<rect
			width="100%"
			height="100%"
			stroke-width="0"
			fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
		/>
	</svg>
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8 lg:pt-32 pb-16">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
			<div
				class="m-0 rounded-xl w-24 shadow-inner shadow-neutral-300 bg-neutral-700/5 p-2 ring-1
         ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4 hidden lg:block"
			>
				<img
					class="h-16 w-16 bg-white p-2 rounded-lg border border-neutral-200"
					src="https://cms.k-7.eu/uploads/logo_flat_k7_transparent_f915a584f2.svg"
					alt="K7-Konzept Karlsruhe GmbH company logo"
				/>
			</div>
			<div class="mt-24 sm:mt-32 lg:mt-16">
				{#if jobCount > 0}
					<a href="career" class="inline-flex space-x-6">
						<span
							class="rounded-full bg-brand-600/10 px-3 py-1 text-sm font-semibold leading-6 text-brand-600 ring-1 ring-inset ring-brand-600/10"
							>{$t.news}</span
						>
						<span
							class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"
						>
							<span>{jobCount} {jobCount === 1 ? $t.home.oneJob : $t.home.moreJobs}</span>
							<svg
								class="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</a>
				{/if}
			</div>
			<h1 class="mt-10 gradient">
				{$t.home.claim}
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				{$t.home.description}
			</p>
			<div class="mt-10 flex items-center gap-x-6">
				<a
					href="/#contact-section"
					class="rounded-md bg-brand-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
					>{$t.home.contactUs}</a
				>
				<a href="/services" class="text-sm font-semibold leading-6 text-gray-900"
					>{$t.wwa.ourServices}<span class="ml-1" aria-hidden="true">→</span></a
				>
			</div>
		</div>
		<div
			class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
		>
			<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
				<div
					class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
				>
					{#if current}
						<img
							src={current.src}
							srcset={current.srcset}
							alt={current.alt}
							sizes="(max-width: 1023px) 100vw, 50vw"
							class="w-[76rem] object-cover aspect-[16/9] rounded-md shadow-2xl ring-1 ring-gray-900/10"
						/>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
