<script lang="ts">
	import IconAt from '$lib/icons/icon-at.svelte';
	import IconClockBolt from '$lib/icons/icon-clock-bolt.svelte';
	import IconMapPin from '$lib/icons/icon-map-pin.svelte';
	import { t } from '$lib/stores/i18n';
	import type { CompanyDetailAttributes } from '$lib/utils/queryCms.server';

	export let detail: CompanyDetailAttributes;

	let reployTo = '';
	let fromName = '';
	let subject = '';
	let message = '';
	let gdprAccepted = false;
</script>

{#if detail}
	<div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-xl lg:max-w-5xl">
			<h2 class="text-4xl font-bold tracking-tight text-gray-900">{$t.contact.talkAboutProject}</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				{$t.contact.weHelp}
			</p>
			<div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
				<form action="#" method="POST" class="lg:flex-auto">
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label for="fromName" class="block text-sm font-semibold leading-6 text-gray-900"
								>{$t.contact.yourName}</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="fromName"
									bind:value={fromName}
									id="fromName"
									autocomplete="name"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="replyTo" class="block text-sm font-semibold leading-6 text-gray-900"
								>{$t.contact.yourEmail}</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="replyTo"
									bind:value={reployTo}
									id="replyTo"
									autocomplete="email"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"
								>{$t.contact.subject}</label
							>
							<div class="mt-2.5">
								<input
									id="subject"
									name="subject"
									bind:value={subject}
									type="text"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="message" class="block text-sm font-semibold leading-6 text-gray-900"
								>{$t.contact.yourMessage}</label
							>
							<div class="mt-2.5">
								<textarea
									id="message"
									name="message"
									bind:value={message}
									rows="4"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<div class="mt-2.5 flex flex-row items-center gap-3">
								<input
									type="checkbox"
									name="privacy"
									bind:checked={gdprAccepted}
									id="privacy"
									class="h-4 w-4 rounded border-gray-300 text-brand-400 focus:ring-brand-400"
								/>
								<label for="privacy" class="block text-sm font-semibold leading-6"
									><a href="/privacy">{$t.contact.gdpr}</a></label
								>
							</div>
						</div>
					</div>
					<div class="mt-10">
						<button
							disabled={!gdprAccepted}
							type="submit"
							class="block w-full rounded-md disabled:bg-brand-200 disabled:opacity-50 disabled:cursor-not-allowed bg-brand-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
							>{$t.contact.sendUsAMessage}</button
						>
					</div>
				</form>
				<div class="lg:mt-6 lg:w-80 lg:flex-none">
					<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div
							class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-transparentlg:w-1/2"
						/>
						<dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
							<div class="flex gap-x-4 items-center">
								<dt class="flex-none">
									<span class="sr-only">{$t.contact.adress}</span>
									<div class="w-6 h-6 stroke-gray-400 stroke-[1.5]">
										<IconMapPin />
									</div>
								</dt>
								<dd>{detail.street} {detail.housenumber}<br />{detail.city}, {detail.zip}</dd>
							</div>
							<div class="flex gap-x-4 items-center">
								<dt class="flex-none">
									<span class="sr-only">{$t.contact.email}</span>
									<div class="w-6 h-6 stroke-gray-400 stroke-[1.5]">
										<IconAt />
									</div>
								</dt>
								<dd><a href={`mailto:${detail.email}`}>{detail.email}</a></dd>
							</div>
							<div class="flex gap-x-4 items-center">
								<dt class="flex-none">
									<span class="sr-only">{$t.contact.hours}</span>
									<div class="w-6 h-6 stroke-gray-400 stroke-[1.5]">
										<IconClockBolt />
									</div>
								</dt>
								<dd>
									{detail.opening_from?.substring(0, 5)} - {detail.opening_to?.substring(0, 5)}
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
