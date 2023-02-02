/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{jsx,js}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
		},
	},
	plugins: [],
};
