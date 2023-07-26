import { getArticleEntryById, getArticleEntryBySlug, getJob } from '$lib/utils/queryCms.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const slug = params.slug;
	const asInt = parseInt(slug);
	const post = Number.isNaN(asInt)
		? await getArticleEntryBySlug(fetch, 'blogs', slug, params.lang ?? 'de')
		: await getArticleEntryById(fetch, 'blogs', slug, params.lang ?? 'de');
	if (!post) throw error(404, { message: 'notFound' });
	try {
		return {
			post: post.attributes,
			id: post.id,
			slug
		};
	} catch (error) {
		console.error(error);
		return { post: null };
	}
};
