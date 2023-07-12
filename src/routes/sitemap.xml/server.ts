import { PUBLIC_DOMAIN } from '$env/static/public';
import { queryArticles, type ListArticleResponseItem } from '$lib/utils/queryCms.server';

const pages = ['team', 'privacy', 'imprint']; //list of pages as a string ex. ["about", "blog", "contact"]

export async function GET() {
	const blogPosts = (await queryArticles(fetch, 'blogs', [], 'de'))?.data ?? [];
	const projectEntries = (await queryArticles(fetch, 'projects', [], 'de'))?.data ?? [];
	const posts = [...blogPosts, ...projectEntries];

	// add careers pages
	// add service pages

	const body = sitemap(posts, pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (
	posts: { id: number; attributes: ListArticleResponseItem }[],
	pages: string[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${PUBLIC_DOMAIN}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${PUBLIC_DOMAIN}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
  ${posts
		.map(
			(post) => `
  <url>
    <loc>${PUBLIC_DOMAIN}/blog/${post.id}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.attributes.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
