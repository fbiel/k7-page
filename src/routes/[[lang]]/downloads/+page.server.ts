import { getDownloads } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	try {
		const downloads = await getDownloads(fetch);
		return { downloads };
	} catch (error) {
		console.error(error);
		return { downloads: null };
	}
}) satisfies PageServerLoad;
