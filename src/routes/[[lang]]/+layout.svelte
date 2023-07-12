<script>
	import '@fontsource-variable/kufam';
	import '@fontsource-variable/kufam/wght-italic.css';
	import '@fontsource-variable/karla';
	import '@fontsource-variable/karla/wght-italic.css';
	import '../../app.css';
	import PageHeader from './page-header.svelte';
	import Portal from './portal.svelte';
</script>

<div class="min-h-screen flex flex-col justify-between">
	<PageHeader />
	<div class="grow">
		<slot />
	</div>
	<Portal />
</div>
