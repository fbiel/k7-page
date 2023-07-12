import { PRIVATE_CMS_BEARER } from '$env/static/private';
import { PUBLIC_CMS } from '$env/static/public';
import { marked } from 'marked';

export const headers = {
	accept: 'application/json',
	Authorization: 'Bearer ' + PRIVATE_CMS_BEARER
};

type Status = 'In Anfrage' | 'Neu' | 'Konzept' | 'In Bearbeitung' | 'Geliefert' | 'Abgeschlossen';
type Language =
	| 'markup'
	| 'bash'
	| 'clike'
	| 'c'
	| 'cpp'
	| 'css'
	| 'javascript'
	| 'jsx'
	| 'coffeescript'
	| 'actionscript'
	| 'css-extr'
	| 'diff'
	| 'git'
	| 'go'
	| 'graphql'
	| 'handlebars'
	| 'json'
	| 'less'
	| 'makefile'
	| 'markdown'
	| 'objectivec'
	| 'ocaml'
	| 'python'
	| 'reason'
	| 'sass'
	| 'scss'
	| 'sql'
	| 'stylus'
	| 'tsx'
	| 'typescript'
	| 'wasm'
	| 'yaml';
export const colorForStatus = (status: Status) => {
	switch (status) {
		case 'In Anfrage':
			return 'orange';
		case 'Neu':
			return 'yellow';
		case 'Konzept':
			return 'grape';
		case 'In Bearbeitung':
			return 'blue';
		case 'Geliefert':
			return 'teal';
		case 'Abgeschlossen':
			return 'green';
		default:
			return 'gray';
	}
};

export interface Meta {
	pagination: { page: number; pageSize: number; pageCount: number; total: number };
}
export interface AuthorResponseItem {
	id: number;
	attributes: {
		name?: string;
		position?: string;
		order?: number;
		bio?: string;
		thumbnail?: MediaItem;
	};
}

export interface ListAuthorsResponse {
	data: AuthorResponseItem[];
	meta: Meta;
}

export interface MediaItemFormat {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: string;
	width: number;
	height: number;
	size: number;
	url: string;
}
type MediaItemFormats = {
	thumbnail: MediaItemFormat;
	small: MediaItemFormat;
	medium: MediaItemFormat;
	large: MediaItemFormat;
};
export interface MediaItem {
	data: {
		id?: number;
		attributes?: {
			name?: string;
			alternativeText?: string;
			caption?: string;
			width?: number;
			height?: number;
			hash?: string;
			ext?: string;
			mime?: string;
			size?: number;
			url?: string;
			previewUrl?: string;
			formats?: MediaItemFormats;
		};
	};
}

export interface ContentFragment {
	id?: number;
	__component?: string;
}
export interface ContentComponentsImage extends ContentFragment {
	image?: MediaItem;
	caption?: string;
	renderSize?: 'small' | 'medium' | 'large';
}
export interface ContentFragmentsParagraph extends ContentFragment {
	title?: string;
	content?: string;
	highlight?: boolean;
}
export interface ContentFragmentsImageParagraph extends ContentFragment {
	title?: string;
	content?: string;
	highlight?: boolean;
	image?: MediaItem;
	renderSize?: 'small' | 'medium' | 'large';
	caption?: string;
}
export interface ContentFragmentsQuote extends ContentFragment {
	author?: string;
	quote?: string;
}

export interface ContentFragmentsCodeblock extends ContentFragment {
	lang?: Language;
	caption?: string;
	code?: string;
}
export interface ContentFragmentsIlluminatingSection extends ContentFragment {
	title?: string;
	topic?: string;
	description?: string;
	icon?: string;
	color?: string;
	gradientColor?: string;
}

export interface ContentFragmentsDidYouKnow extends ContentFragment {
	title?: string;
	text?: string;
	icon?: string;
	color?: string;
	source?: string;
}

export interface ContentFragmentsFeatureCard extends ContentFragment {
	text?: string;
	link?: string;
	linkLabel?: string;
	image?: MediaItem;
}

export interface ContentFragmentsSplitCard extends ContentFragment {
	items?: ContentFragmentsFeatureCard[];
}

export interface ContentFragmentsSeparator extends ContentFragment {
	icon?: string;
	color?: string;
}

export interface SkillListResponse {
	data?: SkillListResponseDataItem[];
	meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
}
export interface Technology {
	id?: number;
	attributes?: {
		name?: string;
		level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
		certification?: string;
		keywords?: string;
		highlight?: boolean;
		description?: string;
	};
}
export interface Skill {
	title?: string;
	description?: string;
	icon?: MediaItem;
	relevance?: number;
	technologies?: {
		data?: Technology[];
	};
}
export interface SkillListResponseDataItem {
	id?: number;
	attributes?: Skill;
}
export interface DepartmentResponseItem {
	id: number;
	attributes: {
		name: string;
		catchphrase: string;
		cover: MediaItem;
		hidden: boolean;
		icon: MediaItem;
		body?: (
			| ContentFragmentsCodeblock
			| ContentComponentsImage
			| ContentFragmentsParagraph
			| ContentFragmentsQuote
			| ContentFragmentsIlluminatingSection
			| ContentFragmentsDidYouKnow
			| ContentFragmentsFeatureCard
			| ContentFragmentsSplitCard
		)[];
		tags: string;
		color: string;
		skills?: SkillListResponse;
		projects?: ListArticleResponse;
		route: string;
		createdAt: string;
		updatedAt: string;
		createdBy: { data?: { id?: number; attributes?: object } };
		updatedBy: { data?: { id?: number; attributes?: object } };
		locale: string;
	};
}

export interface DepartmentListResponse {
	data: DepartmentResponseItem[];
	meta: Meta;
}
export interface ArticleCollectionItem {
	id: number;
	attributes: {
		name: string;
		description: string;
		blogs: {
			data: {
				id: number;
				attributes: ListArticleResponseItem;
			}[];
		};
	};
}
export interface ListArticleResponseItem {
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	author?: { data: AuthorResponseItem };
	departments?: { data: Array<DepartmentResponseItem> };
	cover: MediaItem;
	tags: string;
	locale: string;
	status?: Status;
	hours?: number;
	article_collection?: { data: ArticleCollectionItem };
	content?: (
		| ContentFragmentsCodeblock
		| ContentComponentsImage
		| ContentFragmentsParagraph
		| ContentFragmentsQuote
		| ContentFragmentsIlluminatingSection
		| ContentFragmentsDidYouKnow
		| ContentFragmentsFeatureCard
		| ContentFragmentsSplitCard
	)[];
}

export interface ListArticleResponse {
	data: {
		id: number;
		attributes: ListArticleResponseItem;
	}[];
	meta: Meta;
}

export interface ReferenceResponseItem {
	companyName: string;
	link: string;
	logo?: MediaItem;
}
export interface ListReferencesResponse {
	data: {
		id: number;
		attributes: ReferenceResponseItem;
	}[];
	meta: Meta;
}

export interface ListJobsResponseItem {
	Titel: string;
	GesuchtAb: string;
	MailAn: string;
	Einleitung: string;
	BeispielBild: MediaItem;
	Aufgaben: string;
	Profil: string;
	Sonstiges:
		| ContentFragmentsCodeblock
		| ContentComponentsImage
		| ContentFragmentsParagraph
		| ContentFragmentsQuote
		| ContentFragmentsIlluminatingSection
		| ContentFragmentsDidYouKnow
		| ContentFragmentsFeatureCard
		| ContentFragmentsSplitCard;
}
export interface ListJobsResponse {
	data: {
		id: number;
		attributes: ListJobsResponseItem;
	}[];
	meta: Meta;
}

/* 
{"data":{"id":2,"attributes":{"name":"K7 - Koncept Karlsruhe","street":"Roonstr.","housenumber":"23","zip":"76137","city":"Karlsruhe","country":null,"phone":null,"fax":null,"mobile":null,"email":"info@k-7.eu","opening_from":"08:00:00.000","opening_to":"17:00:00.000","createdAt":"2023-01-10T13:45:41.980Z","updatedAt":"2023-01-10T13:45:41.980Z","locale":"en"}},"meta":{}}*/
export interface CompanyDetailResponse {
	data: {
		id: number;
		attributes: CompanyDetailAttributes;
	};
}
export interface CompanyDetailAttributes {
	name?: string;
	street?: string;
	housenumber?: string;
	zip?: string;
	city?: string;
	country?: string;
	phone?: string;
	fax?: string;
	mobile?: string;
	email?: string;
	opening_from?: string;
	opening_to?: string;
	createdAt?: string;
	updatedAt?: string;
	locale?: string;
}

type PopulateArticleWith = 'departments' | 'content' | 'author' | 'cover' | 'technologies';
export type CollectionQueryType = 'projects' | 'blogs';
export const queryArticles = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	queryType: CollectionQueryType,
	populate: Array<PopulateArticleWith> = [
		'author',
		'content',
		'cover',
		'departments',
		'technologies'
	],
	locale = 'de',
	department: string | undefined = undefined,
	page = 1
) => {
	let queryUrl = `${PUBLIC_CMS}/api/${queryType}?locale=${locale}&populate[0]=${populate.join(
		'%2C'
	)}`;
	console.log('querying articles', queryUrl);
	try {
		if (populate.includes('author')) {
			queryUrl += '&populate[1]=author.thumbnail';
		}
		if (department) {
			const departmentReq = await customFetch(
				`${PUBLIC_CMS}/api/departments?locale=${locale}&filters[name][$eqi]=${department}`,
				{
					method: 'GET',
					headers
				}
			);
			const departmentRes = await departmentReq.json();
			if (departmentRes.data.length !== 0) {
				queryUrl += `?filters[${department}`;
			}
		}
		const request = await customFetch(queryUrl, {
			method: 'GET',
			headers
		});
		const data = await request.json();
		const casted = data as ListArticleResponse;
		return casted;
	} catch (error) {
		console.error('error loading articles', error);
		return null;
	}
};

export const getArticleEntry = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	queryType: CollectionQueryType,
	id: string,
	locale = 'de'
) => {
	const queryUrl = `${PUBLIC_CMS}/api/${queryType}/${id}?locale=${locale}&populate[0]=author,cover,departments,technologies,content,article_collection&populate[1]=content.image,author.thumbnail,article_collection.blogs&populate[2]=content.image.image`;
	const request = await customFetch(queryUrl, {
		method: 'GET',
		headers
	});
	const response = (await request.json()) as { data: { attributes: ListArticleResponseItem } };
	return response.data.attributes;
};

export const getProject = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	id: string,
	locale = 'de'
) => {
	return await getArticleEntry(customFetch, 'projects', id, locale);
};

export const getBlog = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	id: string,
	locale = 'de'
) => {
	return await getArticleEntry(customFetch, 'blogs', id, locale);
};

export const getDepartment = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	id: string
) => {
	const queryUrl = `${PUBLIC_CMS}/api/departments/${id}?populate[0]=cover,icon&populate[1]=blogs,projects,body`;
	const request = await customFetch(queryUrl, {
		method: 'GET',
		headers
	});
	const response = (await request.json()) as { data: { attributes: DepartmentResponseItem } };
	return response.data.attributes;
};

export const getCompanyDetail = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	locale = 'de'
) => {
	const queryUrl = `${PUBLIC_CMS}/api/companydetail?locale=${locale}`;
	try {
		const request = await customFetch(queryUrl, {
			method: 'GET',
			headers
		});
		const response = (await request.json()) as CompanyDetailResponse;
		return response;
	} catch (error) {
		console.error('error loading company detail', error);
		return null;
	}
};

export const getAuthors = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	locale = 'de'
) => {
	const queryUrl = `${PUBLIC_CMS}/api/authors?locale=${locale}&populate[0]=thumbnail`;
	const request = await customFetch(queryUrl, {
		method: 'GET',
		headers
	});
	const response = (await request.json()) as ListAuthorsResponse;
	response.data = response.data.sort(
		(a, b) => (a.attributes?.order ?? 0) - (b.attributes?.order ?? 1)
	);
	return response;
};

export const getDepartmentByRoute = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	route: string,
	locale = 'de'
) => {
	const queryUrl = `${PUBLIC_CMS}/api/departments?locale=${locale}&populate[0]=cover,skills,icon,projects&populate[1]=skills.technologies,skills.icon,projects.author,projects.cover,projects.departments&populate[2]=body.image,projects.author.thumbnail,body.items&filters[route][$eqi]=${route}`;
	const request = await customFetch(queryUrl, {
		method: 'GET',
		headers
	});
	const response = (await request.json()) as DepartmentListResponse;
	if (response.data.length !== 0) return response.data[0];
	return undefined;
};

export const getArticleCollection = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	series: string,
	locale = 'de'
) => {
	const queryUrl = `${PUBLIC_CMS}/api/blogs?locale=${locale}&filters[series][$eqi]=${series}`;
	const request = await customFetch(queryUrl, {
		method: 'GET',
		headers
	});
	const response = (await request.json()) as ListArticleResponse;
	return response.data;
};

export interface ErrorResponse {
	status: number;
	message: string;
	url: string;
}

export const getReferences = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
) => {
	const queryUrl = `${PUBLIC_CMS}/api/references?populate[0]=logo`;
	console.log('querying cms for references', queryUrl);
	try {
		const request = await customFetch(queryUrl, {
			method: 'GET',
			headers
		});
		const response = (await request.json()) as ListReferencesResponse;
		return response;
	} catch (error) {
		console.error('error loading references', error);
		return null;
	}
};

type PopulateDepartmentWith = 'body' | 'skills' | 'cover' | 'icon' | 'blogs' | 'projects';
export const getDepartments = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	populate: Array<PopulateDepartmentWith> = ['cover', 'icon'],
	locale = 'de'
) => {
	const populateParams = populate.length > 0 ? `&populate=${populate.join('%2C')}` : '';
	const queryUrl = `${PUBLIC_CMS}/api/departments?locale=${locale}${populateParams}`;
	console.log('querying cms for departments', queryUrl);
	try {
		const request = await customFetch(queryUrl, {
			method: 'GET',
			headers
		});
		const response = (await request.json()) as DepartmentListResponse;
		response.data = response.data.filter((department) => department.attributes.hidden !== true);
		console.log('GET deparment response', response);
		return response.data;
	} catch (error) {
		return [] as DepartmentResponseItem[];
	}
};

export const getJobs = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
) => {
	const queryUrl = `${PUBLIC_CMS}/api/job-ads?populate[0]=Beispielbild`;
	console.log('querying cms for jobs', queryUrl);
	try {
		const request = await customFetch(queryUrl, {
			method: 'GET',
			headers
		});
		const response = (await request.json()) as ListJobsResponse;
		console.log('GET jobs response', response);
		return response.data;
	} catch (error) {
		return [];
	}
};

export const getJob = async (
	customFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	id: string
) => {
	const queryUrl = `${PUBLIC_CMS}/api/job-ads/${id}?populate[0]=Beispielbild,Ansprechpartner`;
	console.log('querying cms for job with id ' + id, queryUrl);
	try {
		const request = await customFetch(queryUrl, {
			method: 'GET',
			headers
		});
		const response = (await request.json()) as {
			data: { id: number; attributes: ListJobsResponseItem };
		};

		if (response.data.attributes.Profil && response.data.attributes.Profil.trim().length > 0) {
			response.data.attributes.Profil = marked(response.data.attributes.Profil);
		}
		if (response.data.attributes.Aufgaben && response.data.attributes.Aufgaben.trim().length > 0) {
			response.data.attributes.Aufgaben = marked(response.data.attributes.Aufgaben);
		}
		console.log('GET job response', response);
		return response;
	} catch (error) {
		console.error('error loading job', error);
		return null;
	}
};
