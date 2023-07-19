<script>
	import ClipboardText from '$lib/icons/clipboard-text.svelte';
	import { t } from '$lib/stores/i18n';
</script>

<svelte:head>
	<title>K7: {$t.imprint}</title>
</svelte:head>
<div class="my-10 container mx-auto max-w-5xl prose prose-slate px-5">
	<h1 class="gradient">{$t.imprint}</h1>
	<h2>{$t.contact.adress}</h2>
	<div class="flex flex-row justify-start items-center gap-5">
		<div class="w-6 h-6 stroke-black stroke-[1.5]">
			<ClipboardText />
		</div>
		<div class="flex flex-col gap-0">
			<p>
				K7-Konzept Karlsruhe GmbH
				<br />Roonstraße 23a
				<br />76137 Karlsruhe
			</p>
		</div>
	</div>
	<h2>Register</h2>
	<div class="flex flex-row justify-start items-center gap-5">
		<div class="w-6 h-6 stroke-black stroke-[1.5]">
			<ClipboardText />
		</div>
		<div class="flex flex-col gap-0">
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
