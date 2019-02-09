import { createGlobalStyle } from 'styled-components';
import { $titleFont, $bodyFont, $greyLighter, $greyDark, $greyDarker } from './assets/styledVars';

const GlobalStyle = createGlobalStyle`

html, body {
    height: 100%;
    font-size: 16px;
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
    background-color: ${$greyLighter};
    color: ${$greyDark};
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${$titleFont};
    color: ${$greyDarker};
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
