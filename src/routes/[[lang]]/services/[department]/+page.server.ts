import { getDepartmentByRoute } from '$lib/utils/queryCms.server';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const route = params.department;
	const lang = params.lang ?? 'de';
	const department = await getDepartmentByRoute(fetch, route, lang);

	return { department };
}) satisfies PageServerLoad;
