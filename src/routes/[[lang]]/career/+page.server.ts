import { getDepartments, getJobs, getReferences, queryArticles } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const jobs = await getJobs(fetch);
	try {
		return {
			jobs
		};
	} catch (error) {
		console.error(error);
		return { jobs: null };
	}
};
