import {
	getDepartments,
	getJobs,
	getReferences,
	getSlideShow,
	queryArticles
} from '$lib/utils/queryCms.server';
import { error, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { createSourceset } from '$lib/utils/media';
import { PRIVATE_MAIL_URL } from '$env/static/private';

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

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const contactFormData = Object.fromEntries(data);

		const requestData = {
			to: ['info@k-7.eu'],
			subject: 'K7-Kontaktformular: ' + contactFormData.subject,
			message: `Hallo,\n\n ${contactFormData.fromName} (${contactFormData.replyTo}) hat über das Kontaktformular der K7-Website folgende Nachricht gesendet:\n\n${contactFormData.message}`,
			from: contactFormData.replyTo
		};

		if (!contactFormData.replyTo) {
			return fail(400, { replyTo: contactFormData.replyTo, missing: true });
		}
		if (!contactFormData.fromName) {
			return fail(400, { fromName: contactFormData.fromName, missing: true });
		}
		if (!contactFormData.subject) {
			return fail(400, { subject: contactFormData.subject, missing: true });
		}
		if (!contactFormData.message) {
			return fail(400, { message: contactFormData.message, missing: true });
		}
		if (!contactFormData.privacy) {
			return fail(400, { privacy: contactFormData.privacy, missing: true });
		}

		console.log('raw', requestData);
		const requestOptions: RequestInit = {
			method: 'POST',
			redirect: 'follow',
			headers: headers,
			body: JSON.stringify(requestData)
		};
		try {
			const response = await fetch(PRIVATE_MAIL_URL, requestOptions);
			const result = await response.text();
			console.log('sending contact form data result', result);
			return { success: true };
		} catch (error) {
			console.error('error sending contact form data', error);
			return fail(500, { error: error });
		}
	}
};
