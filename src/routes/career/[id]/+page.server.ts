import { getJob } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const jobId = params.id;
	try {
		return {
			lazy: {
				job: getJob(fetch, jobId)
			}
		};
	} catch (error) {
		console.error(error);
		return null;
	}
};
