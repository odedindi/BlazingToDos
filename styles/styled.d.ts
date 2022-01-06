// styled.d.ts
import 'styled-components';

type BasicTheme = {
	fontSizes: {
		small: string;
		p: string;
		h6: string;
		h5: string;
		h4: string;
		h3: string;
		h2: string;
		h1: string;
	};
	fontWeights: {
		body: number;
		subheading: number;
		link: number;
		bold: number;
		heading: number;
	};
	lineHeights: {
		body: number;
		heading: number;
		code: number;
	};
};

type ColorTheme = {
	body: string;
	text: string;
	primary: string;
};

declare module 'styled-components' {
	export interface DefaultTheme {
		// basic theme
		fontSizes: {
			small: string;
			p: string;
			h6: string;
			h5: string;
			h4: string;
			h3: string;
			h2: string;
			h1: string;
		};
		fontWeights: {
			body: number;
			subheading: number;
			link: number;
			bold: number;
			heading: number;
		};
		lineHeights: {
			body: number;
			heading: number;
			code: number;
		};
		// light / dark modes
		colors: ColorTheme;
	}
}
