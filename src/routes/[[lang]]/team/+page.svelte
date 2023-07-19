<script lang="ts">
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>K7: {$t.team.team}</title>
	<meta name="description" content={$t.meta.team} />
</svelte:head>
<div class="max-w-5xl py-8 lg:py-24 mx-auto flex flex-col gap-3 justify-start px-5">
	<div class="mx-auto grid max-w-5xl gap-x-8 gap-y-20 xl:grid-cols-3 xl:items-center">
		<div class="max-w-xl">
			<h2 class="gradient !leading-8">
				{data.content?.data.attributes.title ?? $t.team.meatLeadership}
			</h2>
			<p class="mt-6 text-lg leading-8">
				{data.content?.data.attributes.teamIntroduction ?? $t.team.teamDescription}
			</p>
		</div>
		<ul role="list" class="gap-x-6 space-y-6 gap-y-8 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
			{#if data?.team}
				{@const team = data.team}
				{#each team?.data ?? [] as member}
					<li class="!list-none">
						<div class="flex items-center gap-x-6">
							<img
								class="h-24 w-24 rounded-full"
								src={PUBLIC_IMAGE_SERVER +
									member.attributes.thumbnail?.data.attributes?.formats?.thumbnail?.url}
								alt={member.attributes.thumbnail?.data.attributes?.alternativeText}
							/>
							<div>
								<h3 class="text-base font-semibold leading-7 tracking-tight">
									{member.attributes.name}
								</h3>
								<p class="text-sm font-semibold leading-6 text-brand-400">
									{member.attributes.position}
								</p>
							</div>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
		<p>
			{$t.team.yourPicture} <a href="/career" class="underline">{$t.team.apply}</a>
		</p>
	</div>
	{#if data.content?.data.attributes?.body}
		<div class="mt-8 flex flex-col prose mx-auto max-w-xl xl:max-w-5xl">
			<h3>{$t.wwa.subTitle}</h3>
			{@html data.content.data.attributes.body}
		</div>
	{/if}
</div>
