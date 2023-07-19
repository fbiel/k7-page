<script lang="ts">
	import { PUBLIC_CMS } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	const humanFileSizeFromKilobytes = (kilobytes: number) => {
		const i = Math.floor(Math.log(kilobytes) / Math.log(1024));
		return (
			parseFloat(
				(kilobytes / Math.pow(1024, i)).toLocaleString($t.language, {
					maximumFractionDigits: 2,
					style: 'decimal'
				})
			) +
			' ' +
			['kB', 'MB', 'GB', 'TB'][i]
		);
	};
</script>

<div class="my-10 container mx-auto max-w-5xl prose prose-slate">
	<h1 class="gradient">Downloads</h1>
	<p>
		Die hier beigestellten Dokumente sind urheberrechtlich geschützt. Die Verwendung ist
		grundsätzlich gestattet, sofern die Quelle angegeben wird. Die Dokumente dürfen nicht verändert
		werden. Die Verwendung zu kommerziellen Zwecken ist nicht gestattet.
	</p>
	<p>
		Sollten Sie Fragen zu den Dokumenten haben, wenden Sie sich bitte an <a
			href="mailto:info@k-7.eu">info@k-7.eu</a
		>.
	</p>
	{#if (data.downloads?.data?.length ?? 0) === 0}
		<div
			class="relative my-16 block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
		>
			<span class="my-4 block text-sm font-semibold text-gray-900"
				>Aktuell sind keine Downloads verfügbar</span
			>
			<span class="my-4 block text-sm text-gray-600/70">
				In Kürze werden werden wir hier wieder Medien zur Verfügung stellen.
			</span>
		</div>
	{:else}
		{#each data.downloads?.data?.filter((f) => f.attributes.downloadable) ?? [] as download}
			<div class="my-4">
				<h2>{download.attributes.name}</h2>
				<p>{download.attributes.description}</p>
				<ul>
					{#each download.attributes?.files.data ?? [] as file}
						<li class="flex flex-row gap-3 justify-start items-center">
							<a
								class="block text-brand-500 hover:underline"
								href={PUBLIC_CMS + file?.attributes?.url}
								download={file?.attributes?.name}
							>
								{file?.attributes?.name}
							</a>
							<div class="text-gray-500">
								{humanFileSizeFromKilobytes(file?.attributes?.size ?? 0)}
							</div>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	{/if}
</div>
