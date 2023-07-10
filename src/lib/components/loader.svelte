<script lang="ts">
	export let size: 'md' | 'xl' = 'md';
	export let label: string | undefined = undefined;
</script>

<!-- Closed Ring Spinner s8 -->
<div class="flex flex-row gap-3 items-center justify-center h-10" class:h-16={size === 'xl'}>
	<div class="loader" class:xl={size === 'xl'} />
	{#if label && label !== ''}
		<div class:text-lg={size === 'xl'} class:font-semibold={size === 'xl'}>
			{label}
		</div>
	{/if}
</div>

<style>
	.loader {
		--s: 30px; /* control the size */
		--c: linear-gradient(135deg, #005c6c, #60b1e7); /* control the coloration */

		display: grid;
		place-items: center;
		place-content: center;
		margin: 0 calc(var(--s) / 2);
	}
	.loader.xl {
		--s: 60px;
		margin: 0 calc(var(--s) / 2);
	}
	.loader:before,
	.loader:after {
		content: '';
		grid-area: 1/1;
	}
	.loader,
	.loader:before,
	.loader:after {
		height: var(--s);
		width: calc(var(--s) / 5);
		border-radius: var(--s);
		background: var(--c) calc(50% + var(--_i, 0) * 50%) / var(--s) var(--s);
		transform: translate(calc(var(--_i, 0) * 200%));
		animation: l 0.6s infinite alternate calc(var(--_i, 0) * 0.3s) both;
	}
	.loader:before {
		--_i: -1;
	}
	.loader:after {
		--_i: 1;
	}

	@keyframes l {
		from {
			height: calc(var(--s) / 2);
		}
	}

	body {
		margin: 0;
		height: 100vh;
		display: grid;
		place-content: center;
		background: pink;
	}
</style>
