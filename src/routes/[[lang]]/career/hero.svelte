<script>
	import { PUBLIC_IMAGE_SERVER } from '$env/static/public';
	import { t } from '$lib/stores/i18n';
</script>

<div class="mx-auto max-w-5xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
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
						src={`${PUBLIC_IMAGE_SERVER}/uploads/medium_headway_5_Qg_Iuu_Bx_Kw_M_unsplash_040b476d80.jpg`}
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
						src={`${PUBLIC_IMAGE_SERVER}/uploads/medium_jon_tyson_k_R4_K8n_J9_J_Rc_unsplash_959f4c5e98.jpg`}
						alt=""
						class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
					/>
				</div>
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
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
						src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
						alt=""
						class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
					/>
				</div>
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
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
