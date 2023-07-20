<script>
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
</script>

<div class="mx-auto max-w-5xl px-6 pb-32 sm:pt-32 lg:px-8 lg:pt-32">
	<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
		<div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
			<h1 class="mt-10 gradient">{$t.jobs.futureTogether}</h1>
			<p class="relative mt-6 text-md leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
				{$t.jobs.proud}
			</p>
			<p class="relative mt-6 text-md leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
				{$t.jobs.aboutPeople}
			</p>
		</div>
		<div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
			<div
				class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
			>
				<div class="relative">
					<img
						src={`${PUBLIC_IMAGE_SERVER}/uploads/small_headway_5_Qg_Iuu_Bx_Kw_M_unsplash_040b476d80.jpg`}
						alt=""
						class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
					/>
				</div>
			</div>
			<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
				<div class="relative">
					<img
						src={`${PUBLIC_IMAGE_SERVER}/uploads/small_helmet_afe12508c7.webp`}
						alt=""
						class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
					/>
				</div>
				<div class="relative">
					<img
						src="{PUBLIC_IMAGE_SERVER}/uploads/small_office1_9340e9e15b.webp"
						alt=""
						class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
					/>
				</div>
			</div>
			<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
				<div class="relative">
					<img
						src="{PUBLIC_IMAGE_SERVER}/uploads/small_office2_f0b3c9d565.webp"
						alt=""
						class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
					/>
				</div>
				<div class="relative">
					<img
						src="{PUBLIC_IMAGE_SERVER}/uploads/small_office3_a4f2a0eed1.webp"
						alt=""
						class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
