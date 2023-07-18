import {
	getDepartments,
	getJobs,
	getReferences,
	getSlideShow,
	queryArticles
} from '$lib/utils/queryCms.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { createSourceset } from '$lib/utils/media';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const lang = params.lang ?? 'de';
	if (lang !== 'de' && lang !== 'en') {
		throw error(404, 'Language does not exist');
	}

	const references = await getReferences(fetch);
	const departments = await getDepartments(fetch, ['cover', 'icon'], lang);
	const articles = await queryArticles(fetch, 'blogs', ['author', 'cover'], lang, undefined, 1);
	const jobs = await getJobs(fetch);
	const slideShow = await getSlideShow(fetch);
	const covers = slideShow.map((i) => createSourceset(i.attributes));
	const randomCover = covers[Math.floor(Math.random() * covers.length)];
	try {
		return {
			references,
			departments,
			articles,
			jobs,
			slideShow,
			randomCover
		};
	} catch (error) {
		console.error(error);
		return {
			lang,
			references: null,
			departments: null,
			articles: null,
			jobs: null,
			details: null
		};
	}
};
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log('sent form data', data);
	}
};
