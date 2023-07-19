import { getArticleEntryById, getArticleEntryBySlug, getJob } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const slug = params.slug;
	const asInt = parseInt(slug);
	const post = Number.isNaN(asInt)
		? await getArticleEntryBySlug(fetch, 'blogs', slug, params.lang ?? 'de')
		: await getArticleEntryById(fetch, 'blogs', slug, params.lang ?? 'de');
	try {
		return {
			post,
			slug
		};
	} catch (error) {
		console.error(error);
		return { post: null };
	}
};
