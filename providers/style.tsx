import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import {
	GlobalStyle,
	//  lightTheme,
	darkTheme,
} from 'styles';
// import useDarkMode from 'use-dark-mode';

const StyleProvider: React.FC = ({ children }) => (
	<ThemeProvider theme={darkTheme}>
		<GlobalStyle />
		{children}
	</ThemeProvider>
);

export default StyleProvider;
