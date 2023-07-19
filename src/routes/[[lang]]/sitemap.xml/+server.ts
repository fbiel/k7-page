import { queryArticles, getDepartments, getJobs } from '$lib/utils/queryCms.server';
import {
	articleSitemapEntry,
	departmentSitemapEntry,
	jobAdSitemapEntry,
	sitemap,
	type SitemapEntry
} from '$lib/utils/sitemap.server';

const pages: SitemapEntry[] = [
	{
		relativePath: 'team',
		priority: 0.6,
		changefreq: 'yearly'
	},
	{
		relativePath: 'privacy',
		priority: 0.4,
		changefreq: 'never'
	},
	{
		relativePath: 'imprint',
		priority: 0.2,
		changefreq: 'never'
	},

	{
		relativePath: 'blog',
		priority: 0.6,
		changefreq: 'monthly'
	},
	{
		relativePath: 'projects',
		priority: 0.6,
		changefreq: 'monthly'
	},
	{
		relativePath: 'career',
		priority: 0.5,
		changefreq: 'yearly'
	},
	{
		relativePath: 'downloads',
		priority: 0.3,
		changefreq: 'yearly'
	},
	{
		relativePath: 'services',
		priority: 1,
		changefreq: 'yearly'
	}
];

export async function GET() {
	console.log('generating sitemap');

	const blogPosts = (await queryArticles(fetch, 'blogs', [], 'de'))?.data ?? [];
	const blogEntries = blogPosts.map((post) => articleSitemapEntry(post, 'blog'));
	const projects = (await queryArticles(fetch, 'projects', [], 'de'))?.data ?? [];
	const projectEntries = projects.map((post) => articleSitemapEntry(post, 'projects'));

	const departments = await getDepartments(fetch, [], 'de');
	const departmentEntries = departments.map((department) => departmentSitemapEntry(department));

	const jobAds = await getJobs(fetch);
	const jobAdEntries = jobAdSitemapEntry(jobAds);

	const body = sitemap([
		...pages,
		...departmentEntries,
		...blogEntries,
		...projectEntries,
		...jobAdEntries
	]);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}
