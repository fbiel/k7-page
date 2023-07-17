import { getArticleEntry, getJob } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const blogId = params.id;
	const post = await getArticleEntry(fetch, 'projects', blogId, params.lang ?? 'de');
	try {
		return {
			post,
			blogId
		};
	} catch (error) {
		console.error(error);
		return { post: null };
	}
};
