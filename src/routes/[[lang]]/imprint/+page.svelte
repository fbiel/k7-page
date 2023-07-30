<script lang="ts">
	import CopyButton from '$lib/components/copy-button.svelte';
	import { t } from '$lib/stores/i18n';
</script>

<svelte:head>
	<title>K7: {$t.imprint}</title>
	<meta name="description" content={$t.meta.imprint} />
</svelte:head>
<div class="my-10 container mx-auto max-w-5xl prose dark:prose-invert prose-slate px-5">
	<h1 class="gradient">{$t.imprint}</h1>
	<h2>{$t.contact.adress}</h2>
	<div class="flex flex-row justify-start items-center gap-5">
		<CopyButton copyText={'K7-Konzept Karlsruhe GmbH\nRoonstraße 23a\n76137 Karlsruhe'} />
		<div class="flex flex-col gap-0 shrink">
			<p>
				K7-Konzept Karlsruhe GmbH
				<br />Roonstraße 23a
				<br />76137 Karlsruhe
			</p>
		</div>
	</div>
	<h2>Register</h2>
	<div class="flex flex-row justify-start items-center gap-5">
		<CopyButton
			copyText="Amtsgericht Mannheim\nHRB 746032\nGeschäftsführung: Jannik Stuart | Norbert Stefan Fischer\nUSt-IdNr.: DE358640588\nDUNS Nummer: 344448617"
		/>
		<div class="flex flex-col gap-0 shrink">
			<p>
				Amtsgericht Mannheim<br />
				HRB 746032<br />
				Geschäftsführung: Jannik Stuart | Norbert Stefan Fischer<br />
				USt-IdNr.: DE358640588<br />
				DUNS Nummer: 344448617
			</p>
		</div>
	</div>
	<h3>{$t.imprintPage.responsible}</h3>
	<p>Frank Bielecke, K7-Konzept Karlsruhe GmbH</p>
	<h2>{$t.imprintPage.disclaimerTitle}</h2>
	<div class="flex flex-col gap-5">
		<p>
			{$t.disclaimer}
		</p>
		<p>
			{$t.imprintPage.changesPossible}
		</p>
		<p>
			{$t.imprintPage.noClaims}
		</p>
	</div>
</div>
