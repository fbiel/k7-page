import type { SourceSet } from './media';

export async function imageFlip(
	node: HTMLImageElement,
	options: { images: SourceSet[]; interval: number; duration: number; resize: boolean } = {
		images: [],
		interval: 15000,
		duration: 500,
		resize: false
	}
) {
	let index = 0;
	let timer: string | number | NodeJS.Timeout | undefined;

	if (options.images.length <= 1) {
		return {
			destroy() {
				clearTimeout(timer);
			}
		};
	}
	node.style.transition = `${options.duration}ms opacity ease-in-out`;
	const loaded = () => {
		node.style.opacity = '1';
	};
	const startTimer = () => {
		timer = setInterval(() => {
			index++;
			const current = options.images[index % options.images.length];
			node.style.opacity = '0';
			setTimeout(() => {
				node.src = current.src;
				node.srcset = current.srcset;
				node.alt = current.alt;
				if (options.resize) node.sizes = current.sizes;
				if (node.complete) {
					loaded();
				} else {
					node.addEventListener('load', loaded);
				}
			}, options.duration);
		}, options.interval + options.duration);
	};
	startTimer();

	return {
		destroy() {
			clearTimeout(timer);
			node.removeEventListener('load', loaded);
		}
	};
}
