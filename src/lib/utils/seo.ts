import { PUBLIC_DOMAIN, PUBLIC_IMAGE_SERVER } from '$env/static/public';
import type { ListArticleResponseItem } from './queryCms.server';

export const ldStringify = (ld: unknown) => {
	return `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
};
export const companyLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'K7-Konzept Karlsruhe GmbH',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Roonstraße 23a',
		addressLocality: 'Karlsruhe',
		postalCode: '76137',
		addressCountry: 'DE'
	},
	logo: {
		'@type': 'ImageObject',
		url: 'https://cms.k-7.eu/uploads/g8_00693065cc.svg'
	},
	contactPoint: {
		'@type': 'ContactPoint',
		email: 'info@k-7.eu',
		contactType: 'customer service',
		hoursAvailable: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '08:00',
			closes: '17:00'
		}
	},
	duns: '344448617',
	foundingDate: '2022-12-01',
	legalName: 'K7-Konzept Karlsruhe GmbH',
	url: PUBLIC_DOMAIN,
	knowsLanguage: 'de,en',
	slogan: 'K7 - Maßgeschneiderte Lösungen, verlässliche Qualität'
};

export const createBreadcrumbLd = (type: string, title: string, slug: string) => {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: type,
				item: `${PUBLIC_DOMAIN}/${type}`
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: title,
				item: `${PUBLIC_DOMAIN}/${type}/${slug}`
			}
		]
	};
};

export const createArticleLd = (
	type: string,
	id: string | undefined | null,
	entry: ListArticleResponseItem | undefined | null
) => {
	const cover =
		PUBLIC_IMAGE_SERVER +
		(entry?.cover?.data?.attributes?.formats?.small.url ?? entry?.cover?.data.attributes?.url);

	if (!id || !entry)
		return {
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `${PUBLIC_DOMAIN}/${type}/${entry?.slug ?? id}`
			},
			publisher: companyLd,
			copyRightHolder: companyLd
		};

	const thumbnail =
		PUBLIC_IMAGE_SERVER +
		(entry?.cover?.data?.attributes?.formats?.thumbnail.url ?? entry?.cover?.data.attributes?.url);
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${PUBLIC_DOMAIN}/${type}/${entry?.slug ?? id}`
		},
		headline: entry.title,
		image: cover,
		dateCreated: entry.createdAt,
		datePublished: entry.publishedAt,
		dateModified: entry.updatedAt,
		author: {
			'@type': 'Person',
			name: entry.author?.data.attributes.name
		},
		publisher: companyLd,
		description: entry.description,
		copyRightHolder: companyLd,
		keywords: entry.tags,
		thumbnailUrl: thumbnail,
		inLanguage: entry.locale
	};
};
