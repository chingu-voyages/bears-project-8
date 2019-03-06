import { createGlobalStyle } from 'styled-components';
import { darken, lighten } from 'polished';
import { $titleFont, $bodyFont, $grey, $tomato, $elfGreen } from './assets/styledVars';

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
    background-color: ${lighten(0.45, $grey)};
    color: ${darken(0.2, $grey)};
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${$titleFont};
    color: ${darken(0.4, $grey)};
}

p {
    margin: 0;
}

#root {
	width: 100%;
	height: 100%;
}

.toastify--main {
    .Toastify__toast--error {
        background: ${$tomato};
    }
    .Toastify__toast--success {
        background: ${$elfGreen};
    }
}

.toastify--content {
    border-radius: 6px;
    padding: 0.5rem;
}
`;

export default GlobalStyle;
