import { getDepartments, getJobs, getReferences, queryArticles } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		return {
			lazy: {
				jobs: getJobs(fetch)
			}
		};
	} catch (error) {
		console.error(error);
		return null;
	}
};
