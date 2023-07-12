import { getAuthors } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const lang = params.lang ?? 'de';
	try {
		return {
			lazy: {
				team: getAuthors(fetch, lang)
			}
		};
	} catch (error) {
		console.error(error);
		return { lazy: { team: null } };
	}
};
