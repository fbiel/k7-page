<script lang="ts">
	import IconAt from '$lib/icons/icon-at.svelte';
	import IconClockBolt from '$lib/icons/icon-clock-bolt.svelte';
	import IconMapPin from '$lib/icons/icon-map-pin.svelte';
	import { t } from '$lib/stores/i18n';
	import type { CompanyDetailAttributes } from '$lib/utils/queryCms.server';

	export let detail: CompanyDetailAttributes;
</script>

{#if detail}
	<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
	<div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-xl lg:max-w-5xl">
			<h2 class="text-4xl font-bold tracking-tight text-gray-900">{$t.contact.talkAboutProject}</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				We help companies and individuals build out their brand guidelines.
			</p>
			<div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
				<form action="#" method="POST" class="lg:flex-auto">
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label for="name" class="block text-sm font-semibold leading-6 text-gray-900"
								>{$t.contact.yourName}</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="name"
									id="name"
									autocomplete="name"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-400 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-semibold leading-6 text-gray-900"
								>{$t.contact.yourEmail}</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="email"
									id="email"
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
							type="submit"
							class="block w-full rounded-md bg-brand-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
							>Let’s talk</button
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
									<span class="sr-only">{$t.contact.adress}</span>
									<div class="w-6 h-6 stroke-gray-400 stroke-[1.5]">
										<IconAt />
									</div>
								</dt>
								<dd>{detail.email}</dd>
								<dd>
									<a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a>
								</dd>
							</div>
							<div class="flex gap-x-4 items-center">
								<dt class="flex-none">
									<span class="sr-only">{$t.contact.adress}</span>
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

	<!-- <div class="relative isolate bg-transparent">
		<div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
			<div class="relative px-6 lg:static lg:px-8">
				<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
					<div
						class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-transparentlg:w-1/2"
					/>
					<h2 class="text-3xl font-bold tracking-tight text-gray-900">
						{$t.contact.talkAboutProject}
					</h2>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						{$t.contact.sendUsAMessage}
					</p>
					<dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
						<div class="flex gap-x-4 items-center">
							<dt class="flex-none">
								<span class="sr-only">{$t.contact.adress}</span>
								<div class="w-8 h-8 stroke-gray-400 stroke-[1.5]">
									<IconMapPin />
								</div>
							</dt>
							<dd>{detail.street} {detail.housenumber}<br />{detail.city}, {detail.zip}</dd>
						</div>
						<div class="flex gap-x-4">
							<dt class="flex-none">
								<span class="sr-only">Telephone</span>
								<svg
									class="h-7 w-6 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
							</dt>
							<dd>
								<a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a>
							</dd>
						</div>
						<div class="flex gap-x-4">
							<dt class="flex-none">
								<span class="sr-only">Email</span>
								<svg
									class="h-7 w-6 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
							</dt>
							<dd>
								<a class="hover:text-gray-900" href="mailto:info@k-7.eu">info@k-7.eu</a>
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<form action="#" method="POST" class="px-6 pb-12 pt-20 sm:pb-32 lg:px-8 lg:py-48">
				<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900"
								>First name</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autocomplete="given-name"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900"
								>Last name</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autocomplete="family-name"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="email" class="block text-sm font-semibold leading-6 text-gray-900"
								>Email</label
							>
							<div class="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autocomplete="email"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900"
								>Phone number</label
							>
							<div class="mt-2.5">
								<input
									type="tel"
									name="phone-number"
									id="phone-number"
									autocomplete="tel"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="message" class="block text-sm font-semibold leading-6 text-gray-900"
								>Message</label
							>
							<div class="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows="4"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
					<div class="mt-8 flex justify-end">
						<button
							type="submit"
							class="rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
							>Send message</button
						>
					</div>
				</div>
			</form>
		</div>
	</div> -->
{/if}
