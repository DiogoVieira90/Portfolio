import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
}

body {
  background-color: ${props => props.theme['bg-dark']};
  color: ${props => props.theme['white']};
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem Roboto, sans-serif;
}

`