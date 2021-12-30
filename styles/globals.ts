import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  transition: all 0.2 ease-in-out;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

}
body {
  background-color: ${({ theme }) => theme.colors.body}; 
  color: ${({ theme }) => theme.colors.text};   
}

a {
  color: inherit;
  text-decoration: none;
}


`;

export default GlobalStyle;
