import { createGlobalStyle } from 'styled-components';
import { $titleFont, $bodyFont, $white } from './assets/styledVars';

const GlobalStyle = createGlobalStyle`

html, body {
	height: 100%;
}

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
    font-family: ${$bodyFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1e1123;
    color: #fff;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${$titleFont};
    color: ${$white};
}

p {
    margin: 0;
}

#root {
	width: 100%;
	height: 100%;
}
`;

export default GlobalStyle;
