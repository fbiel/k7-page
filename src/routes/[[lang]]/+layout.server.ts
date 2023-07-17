import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getCompanyDetail } from '$lib/utils/queryCms.server';

export const load: LayoutServerLoad = async ({ params }) => {
	const lang = params.lang ?? 'de';
	const details = await getCompanyDetail(fetch, lang);
	if (lang !== 'de' && lang !== 'en') {
		throw error(404, 'Language does not exist');
	}
	return {
		lang,
		details
	};
};
