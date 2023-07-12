import { getArticleEntry, getJob } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const blogId = params.id;
	try {
		return {
			lazy: {
				post: getArticleEntry(fetch, 'blogs', blogId, params.lang ?? 'de')
			}
		};
	} catch (error) {
		console.error(error);
		return { lazy: { post: null } };
	}
};
