import { getJob } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const jobId = params.id;
	const job = await getJob(fetch, jobId);
	try {
		return {
			job
		};
	} catch (error) {
		console.error(error);
		return { job: null };
	}
};
