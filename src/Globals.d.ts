declare module '*.mp4';
declare module '*.webm';
declare module '*@fancyapps/ui/dist/fancybox/fancybox.esm.js';

declare module '*.mp4' {
	const src: string;
	export default src;
}

declare module '*.webm' {
	const src: string;
	export default src;
}