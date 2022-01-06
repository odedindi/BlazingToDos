import { BasicTheme, ColorTheme } from './styled';

export const light: ColorTheme = {
	body: '#fff',
	text: '#161515',
	primary: '#E342D7',
};

export const dark: ColorTheme = {
	body: '#0E2161',
	text: '#E342D7',
	primary: '#AD8A2A',
};

const basicTheme: BasicTheme = {
	fontSizes: {
		small: '0.8rem',
		p: '1.1rem',
		h6: '1.25rem',
		h5: '1.5rem',
		h4: '1.75rem',
		h3: '2rem',
		h2: '2.2rem',
		h1: '3rem',
	},
	fontWeights: {
		body: 400,
		subheading: 500,
		link: 600,
		bold: 700,
		heading: 800,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.75,
		code: 1.6,
	},
	// ...
};

export const lightTheme = { ...basicTheme, colors: { ...light } };
export const darkTheme = { ...basicTheme, colors: { ...dark } };
