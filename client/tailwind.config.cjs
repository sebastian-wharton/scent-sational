/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{jsx,js}'
	],
	darkMode: 'class',
	theme: {
		colors: {
			pink1: '#211A1A',
			pink2: '#362929',
			pink3: '#3C3131',
			pink4: '#654949',
			pink5: '#EDE0DF',
			offWhite: '#f2f2f2',
		},
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
		},
	},
};
