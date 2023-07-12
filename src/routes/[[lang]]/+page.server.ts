import {
	getCompanyDetail,
	getDepartments,
	getJobs,
	getReferences,
	queryArticles
} from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const lang = params.lang ?? 'de';
	try {
		return {
			lang,
			lazy: {
				references: getReferences(fetch),
				departments: getDepartments(fetch, ['cover', 'icon'], lang),
				articles: queryArticles(fetch, 'blogs', ['author', 'cover'], lang, undefined, 1),
				jobs: getJobs(fetch),
				details: getCompanyDetail(fetch, lang)
			}
		};
	} catch (error) {
		console.error(error);
		return {
			lang,
			lazy: { references: null, departments: null, articles: null, jobs: null, details: null }
		};
	}
};
