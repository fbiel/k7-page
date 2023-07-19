import { PUBLIC_IMAGE_SERVER } from '$env/static/public';

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
export interface MediaItemAttributes {
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
	createdAt: string;
	updatedAt: string;
}
export interface MediaItem {
	data: {
		id?: number;
		attributes?: MediaItemAttributes;
	};
}

export interface SourceSet {
	src: string;
	srcset: string;
	sizes: string;
	alt: string;
}

export function createSourceset(attr: MediaItemAttributes | undefined | null): SourceSet {
	if (!attr?.url) throw new Error('media item has no attributes');
	const src = PUBLIC_IMAGE_SERVER + attr.url;
	const sizes = '(max-width: 900px) 90vw, (max-width:1100px) 70vw, 40vw';
	const alt = attr.alternativeText || '';
	if (!attr.formats) {
		return { src, srcset: `${src} ${attr.width}w`, sizes, alt };
	}
	const set = Object.values(attr.formats).map((format) => {
		return `${PUBLIC_IMAGE_SERVER}${format.url} ${format.width}w`;
	});
	return { src, srcset: set.join(', '), sizes, alt };
}
