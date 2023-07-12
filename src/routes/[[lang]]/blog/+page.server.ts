import { getAuthors, queryArticles } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params, url }) => {
	const lang = params.lang ?? 'de';
	const page = url.searchParams.get('page') ?? '1';
	try {
		return {
			lazy: {
				posts: queryArticles(
					fetch,
					'blogs',
					['author', 'content', 'cover', 'departments', 'technologies'],
					lang,
					undefined,
					Number.parseInt(page)
				)
			}
		};
	} catch (error) {
		console.error(error);
		return { lazy: { posts: null } };
	}
};
