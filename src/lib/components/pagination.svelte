<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import type { Meta } from '$lib/utils/queryCms.server';

	export let meta: Meta;

	export let href: string;
	export let pageKeyword: string = 'page';
	let totalPages = Math.ceil(meta.pagination.total / meta.pagination.pageSize);
</script>

<div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
	<div class="flex flex-1 justify-between sm:hidden">
		<a
			href={`${href}${pageKeyword}=${meta.pagination.page === 1 ? 1 : meta.pagination.page - 1}`}
			class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
			>Previous</a
		>
		<a
			href={`${href}${pageKeyword}=${
				meta.pagination.page === totalPages ? meta.pagination.page : meta.pagination.page + 1
			}`}
			class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
			>Next</a
		>
	</div>
	<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
		<div>
			<p class="text-sm text-gray-700">
				Showing
				<span class="font-medium">{(meta.pagination.page - 1) * meta.pagination.pageSize + 1}</span>
				to
				<span class="font-medium"
					>{meta.pagination.page < totalPages
						? ((meta.pagination.page ?? 0) - 1) * meta.pagination.pageSize +
						  meta.pagination.pageSize
						: meta.pagination.total}</span
				>
				of
				<span class="font-medium">{meta.pagination.total}</span>
				results
			</p>
		</div>
		<div>
			<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
				{#if meta.pagination.page > 1}
					<a
						href={`${href}${pageKeyword}=${meta.pagination.page - 1}`}
						class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
					>
						<span class="sr-only">Previous</span>
						<div class="w-5 h-5 stroke-black stroke-2">
							<ChevronLeft />
						</div>
					</a>
				{/if}
				<!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
				<!-- generate links for available pages -->
				{#each Array.from({ length: totalPages ?? 0 }, (_, i) => i + 1).filter((i) => i === 1 || i === totalPages || Math.abs(i - meta.pagination.page) <= 2) as page}
					{#if page === meta.pagination.page}
						<a
							class:rounded-l-md={meta.pagination.page === 1}
							class:rounded-r-md={meta.pagination.page === totalPages}
							href=""
							aria-current="page"
							class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold !text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>{page}</a
						>
					{:else if (page === meta.pagination.page - 2 || page === meta.pagination.page + 2) && page !== totalPages && page !== 1}
						<span
							class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
							>...</span
						>
					{:else}
						<a
							href={`${href}${pageKeyword}=${page}`}
							class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							>{page}</a
						>
					{/if}
				{/each}
				{#if totalPages > 1 && meta.pagination.page !== totalPages}
					<a
						href={`${href}${pageKeyword}=${meta.pagination.page + 1}`}
						class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
					>
						<span class="sr-only">Next</span>
						<div class="w-5 h-5 stroke-black stroke-2">
							<ChevronRight />
						</div>
					</a>
				{/if}
			</nav>
		</div>
	</div>
</div>
