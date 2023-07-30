<script lang="ts">
	import { enhance } from '$app/forms';
	import IconAt from '$lib/icons/icon-at.svelte';
	import IconClockBolt from '$lib/icons/icon-clock-bolt.svelte';
	import IconMailFast from '$lib/icons/icon-mail-fast.svelte';
	import IconMapPin from '$lib/icons/icon-map-pin.svelte';
	import IconMoodSadDizzy from '$lib/icons/icon-mood-sad-dizzy.svelte';
	import { t } from '$lib/stores/i18n';
	import type { CompanyDetailAttributes } from '$lib/utils/queryCms.server';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let detail: CompanyDetailAttributes;

	export let form: ActionData;
</script>

{#if detail}
	<div id="contact" class="relative isolate px-6 pt-16 pb-24 lg:px-8">
		<div class="mx-auto max-w-xl lg:max-w-5xl">
			<h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 !mb-0">
				{$t.contact.talkAboutProject}
			</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
				{$t.contact.weHelp}
			</p>
			{#if form?.missing}
				<div
					class="rounded-lg bg-red-50 border border-red-400 p-4"
					in:slide={{ delay: 0, duration: 300, axis: 'y' }}
				>
					<div class="flex items-center gap-5">
						<div class="flex-shrink-0">
							<div class="w-6 h-6 stroke-red-800 stroke-2">
								<IconMoodSadDizzy />
							</div>
						</div>
						<div class="flex flex-col gap-0">
							<p class="text-base font-semibold text-red-800 !mb-0">{$t.contact.error}</p>
							<p class="text-red-700 !mt-0">
								{form?.missing && !(form?.privacy ?? false)
									? $t.contact.gdprMissing
									: $t.contact.missing}
							</p>
						</div>
					</div>
				</div>
			{/if}

			{#if form?.success}
				<div
					class="rounded-lg bg-green-50 border border-emerald-400 p-4"
					in:slide={{ delay: 0, duration: 300, axis: 'y' }}
				>
					<div class="flex items-center gap-5">
						<div class="flex-shrink-0">
							<div class="w-6 h-6 stroke-emerald-800 stroke-2">
								<IconMailFast />
							</div>
						</div>
						<div class="flex flex-col">
							<p class="text-base font-semibold text-green-800 !mb-0">
								{$t.contact.thanksForMessage}
							</p>
							<p class="text-green-700 !mt-0">{$t.contact.replySoon}</p>
						</div>
					</div>
				</div>
			{/if}
			<div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
				<form
					use:enhance
					method="POST"
					class="lg:flex-auto"
					data-sveltekit-keepfocus
					data-sveltekit-noscroll
					data-sveltekit-replacestate
				>
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label
								for="fromName"
								class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
								>{$t.contact.yourName}</label
							>
							<div class="mt-2.5">
								<input
									required
									minlength="3"
									type="text"
									name="fromName"
									id="fromName"
									value={form?.fromName ?? ''}
									autocomplete="name"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 dark:ring-0 dark:focus:ring-2 ring-gray-300
									 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6 ring-inset
									  dark:bg-brand-600 dark:text-white dark:ring-gray-600 dark:focus:ring-brand-200"
								/>
							</div>
						</div>
						<div>
							<label
								for="replyTo"
								class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
								>{$t.contact.yourEmail}</label
							>
							<div class="mt-2.5">
								<input
									required
									type="text"
									name="replyTo"
									id="replyTo"
									value={form?.replyTo ?? ''}
									autocomplete="email"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 dark:ring-0 dark:focus:ring-2 ring-gray-300
									 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6 ring-inset
									  dark:bg-brand-600 dark:text-white dark:ring-gray-600 dark:focus:ring-brand-200"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label
								for="subject"
								class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
								>{$t.contact.subject}</label
							>
							<div class="mt-2.5">
								<input
									required
									minlength="3"
									id="subject"
									value={form?.subject ?? ''}
									name="subject"
									type="text"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 dark:ring-0 dark:focus:ring-2 ring-gray-300
									 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6 ring-inset
									  dark:bg-brand-600 dark:text-white dark:ring-gray-600 dark:focus:ring-brand-200"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label
								for="message"
								class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
								>{$t.contact.yourMessage}</label
							>
							<div class="mt-2.5">
								<textarea
									required
									minlength="10"
									id="message"
									value={form?.message ?? ''}
									name="message"
									rows="4"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 dark:ring-0 dark:focus:ring-2 ring-gray-300
									 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6 ring-inset
									  dark:bg-brand-600 dark:text-white dark:ring-gray-600 dark:focus:ring-brand-200"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<div class="mt-2.5 flex flex-row items-center gap-3">
								<input
									type="checkbox"
									name="privacy"
									checked={form?.privacy ?? false}
									id="privacy"
									class="h-5 w-5 rounded border-gray-300 text-brand-400 no-ring"
								/>
								<label for="privacy" class="ml-3 block text-sm font-semibold leading-6"
									><a href="/privacy" target="_blank" class="hover:underline">{$t.contact.gdpr}</a
									></label
								>
							</div>
						</div>
					</div>
					<div class="mt-10">
						<button
							type="submit"
							class="block w-full rounded-md disabled:bg-brand-200 disabled:opacity-50 disabled:cursor-not-allowed bg-brand-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:!bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400
							dark:bg-neutral-100 dark:!text-brand-800 dark:hover:!bg-neutral-300 transition-colors"
							>{$t.contact.submitMessage}</button
						>
					</div>
				</form>
				<div class="lg:mt-6 lg:w-80 lg:flex-none">
					<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div
							class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-transparentlg:w-1/2"
						/>
						<div class="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-400">
							<a
								target="_blank"
								href="https://maps.apple.com/?q=Roonstrasse+23a+76137+Karlsruhe+Germany"
								class="flex gap-x-4 items-center"
							>
								<div class="flex-none">
									<span class="sr-only">{$t.contact.adress}</span>
									<div class="w-6 h-6 stroke-gray-400 stroke-[1.5]">
										<IconMapPin />
									</div>
								</div>
								<div>{detail.street} {detail.housenumber}<br />{detail.zip} {detail.city}</div>
							</a>
							<a href={`mailto:${detail.email}`} class="flex gap-x-4 items-center">
								<div class="flex-none">
									<span class="sr-only">{$t.contact.email}</span>
									<div class="w-6 h-6 stroke-gray-400 stroke-[1.5]">
										<IconAt />
									</div>
								</div>
								<div>{detail.email}</div>
							</a>
							<div class="flex gap-x-4 items-center">
								<div class="flex-none">
									<span class="sr-only">{$t.contact.hours}</span>
									<div class="w-6 h-6 stroke-gray-400 stroke-[1.5]">
										<IconClockBolt />
									</div>
								</div>
								<div>
									{detail.opening_from?.substring(0, 5)} - {detail.opening_to?.substring(0, 5)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
