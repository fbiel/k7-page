import { getDepartments } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const lang = params.lang ?? 'de';
	const departments = await getDepartments(fetch, ['cover', 'icon'], lang);
	return { departments };
}) satisfies PageServerLoad;
