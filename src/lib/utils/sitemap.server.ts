import { PUBLIC_DOMAIN } from '$env/static/public';
import type {
	DepartmentResponseItem,
	ListArticleResponseItem,
	ListJobsResponse,
	ListJobsResponseItem
} from './queryCms.server';

export type SitemapEntry = {
	relativePath: string;
	lastmod?: Date | null;
	priority: number;
	changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | null;
};

export type Post = {
	id: number;
	attributes: ListArticleResponseItem;
};

export function articleSitemapEntry(post: Post, type: 'blog' | 'projects'): SitemapEntry {
	return {
		relativePath: `${type}/${post.id}`,
		lastmod: new Date(post.attributes.updatedAt),
		priority: 0.4,
		changefreq: 'never'
	};
}

export function departmentSitemapEntry(department: DepartmentResponseItem): SitemapEntry {
	return {
		relativePath: `services/${department.attributes.route}`,
		lastmod: new Date(department.attributes.updatedAt),
		priority: 0.6,
		changefreq: 'never'
	};
}

export function jobAdSitemapEntry(
	jobAds: {
		id: number;
		attributes: ListJobsResponseItem;
	}[]
): SitemapEntry[] {
	return jobAds.map((jobAd) => ({
		relativePath: `career/${jobAd.id}`,
		lastmod: new Date(jobAd.attributes.updatedAt),
		priority: 0.5,
		changefreq: 'never'
	}));
}

export function sitemap(pages: SitemapEntry[]) {
	const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
	${pages
		.map(
			(page) => `
	<url>
		<loc>${PUBLIC_DOMAIN + '/' + page.relativePath}</loc>
		${
			page.lastmod
				? `
		<lastmod>${page.lastmod.toISOString()}</lastmod>
		`
				: ''
		}
		<priority>${page.priority}</priority>
		${
			page.changefreq
				? `
		<changefreq>${page.changefreq}</changefreq>
		`
				: ''
		}
	</url>
	`
		)
		.join('')}
</urlset>
`;
	return body;
}
