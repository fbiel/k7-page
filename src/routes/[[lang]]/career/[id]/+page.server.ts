import { getJob } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const jobId = params.id;
	try {
		const job = await getJob(fetch, jobId);
		return {
			job
		};
	} catch (error) {
		console.error(error);
		return { job: null };
	}
};
