import { getAuthors, getPageTeam } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const lang = params.lang ?? 'de';
	const team = await getAuthors(fetch, lang);
	const content = await getPageTeam(fetch, lang);
	try {
		return {
			team,
			content
		};
	} catch (error) {
		console.error(error);
		return { team: null, content: null };
	}
};
