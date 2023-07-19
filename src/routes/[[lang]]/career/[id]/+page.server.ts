import { getJob } from '$lib/utils/queryCms.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const jobId = params.id;
	try {
		const job = await getJob(fetch, jobId);
		if (!job) throw error(404, { message: 'notFound' });
		return {
			job
		};
	} catch (error) {
		console.error(error);
		return { job: null };
	}
};
