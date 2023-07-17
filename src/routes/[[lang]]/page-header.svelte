<script lang="ts">
	import { t } from '$lib/stores/i18n';
	import IconBrandGithub from '$lib/icons/icon-brand-github.svelte';
	import IconBrandLinkedin from '$lib/icons/icon-brand-linkedin.svelte';
	import { page } from '$app/stores';
	import IconLanguage from '$lib/icons/icon-language.svelte';
	export let menuOpen = false;

	export let navBarItems = [
		{
			href: 'projects',
			label: $t.projects.projects
		},
		{
			href: 'blog',
			label: $t.news
		},
		{
			href: 'services',
			label: $t.services.services
		}
	];
	$: currentLinkWithDifferentLanguage = $page.url.pathname.startsWith('/en/')
		? $page.url.toString().replace('/en/', '/')
		: $page.url.toString().replace($page.url.origin, `${$page.url.origin}/en`);
</script>

<header class="bg-transparent">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href={$t.link} class="-m-1.5 px-1.5">
				<span class="sr-only">{$t.company}</span>
				<img
					height="40"
					width="178"
					src="https://cms.k-7.eu/uploads/logo_transparent_7774819042.svg"
					alt=""
				/>
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				on:click={() => (menuOpen = true)}
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each navBarItems as navBarItem}
				<a
					href={$t.link + navBarItem.href}
					class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
				>
					{navBarItem.label}
				</a>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<div class="flex gap-3 stroke-[1.5] stroke-black">
				<a href={currentLinkWithDifferentLanguage} data-sveltekit-reload
					><div class="w-6 h-6"><IconLanguage /></div></a
				>
				<a href="https://github.com/konzept7/"><div class="w-6 h-6"><IconBrandGithub /></div></a>
				<a href="https://www.linkedin.com/company/k-7/"
					><div class="w-6 h-6"><IconBrandLinkedin /></div></a
				>
			</div>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden" role="dialog" aria-modal="true" class:hidden={!menuOpen}>
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-20" />
		<div
			class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href={$page.data.lang === 'de' ? '/' : '/en'} class="-m-1.5 px-1.5">
					<span class="sr-only">{$t.company}</span>
					<img
						height="40"
						width="178"
						src="https://cms.k-7.eu/uploads/logo_transparent_7774819042.svg"
						alt=""
					/>
				</a>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
					on:click={() => (menuOpen = false)}
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						{#each navBarItems as navBarItem}
							<a
								href={$t.link + navBarItem.href}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>
								{navBarItem.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
