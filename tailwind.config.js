module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      sans: ['Assistant', 'sans-serif'],
      serif: ['Assistant', 'serif']
    },
		colors: {
			'white': '#fff',
			'steel': {
				'normal': '#424d83',
				'light': '#5c69a7',
				'lighter': '#818ed0',
				'lightest': '#d5dcff'
			},
			'lilac': {
				300: '#d5dbff',
				500: '#a1affc'
			},
			'gray': {
				50: '#fafafa',
				100: '#f4f4f4',
				200: '#e7e7e7',
				300: '#d5d5d5',
				400: '#a3a3a3',
				500: '#727272',
				600: '#55555',
				700: '#414141',
				800: '#292929',
				900: '#181818'
			}
		}
	},
	plugins: [],
};