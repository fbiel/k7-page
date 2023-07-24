/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					/*'#eaedf0', '#c4cbd4', '#9faab8', '#79899c', '#546881', '#2e4765', '#263a53', '#1d2d41', '#15202D', '#0E151E'*/
					50: '#eaedf0',
					100: '#c4cbd4',
					200: '#9faab8',
					300: '#79899c',
					400: '#546881',
					500: '#2e4765',
					600: '#263a53',
					700: '#1d2d41',
					800: '#15202D',
					900: '#0E151E'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
