import { getArticleEntry, getJob } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const blogId = params.id;
	try {
		const post = await getArticleEntry(fetch, 'projects', blogId, params.lang ?? 'de');
		return {
			post,
			lazy: {
				post: getArticleEntry(fetch, 'projects', blogId, params.lang ?? 'de')
			}
		};
	} catch (error) {
		console.error(error);
		return { lazy: { post: null } };
	}
};
