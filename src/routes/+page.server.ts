import { getDepartments, getJobs, getReferences, queryArticles } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		return {
			lazy: {
				references: getReferences(fetch),
				departments: getDepartments(fetch, ['cover', 'icon'], 'de'),
				articles: queryArticles(fetch, 'blogs', ['author', 'cover'], 'de', undefined, 1),
				jobs: getJobs(fetch)
			}
		};
	} catch (error) {
		console.error(error);
		return null;
	}
};
