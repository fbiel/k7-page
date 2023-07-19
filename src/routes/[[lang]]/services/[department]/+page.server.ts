import { getDepartmentByRoute } from '$lib/utils/queryCms.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const route = params.department;
	const lang = params.lang ?? 'de';
	const department = await getDepartmentByRoute(fetch, route, lang);
	if (!department) throw error(404, { message: 'notFound' });
	return { department };
}) satisfies PageServerLoad;
