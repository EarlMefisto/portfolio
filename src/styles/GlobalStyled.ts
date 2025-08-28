import { createGlobalStyle } from "styled-components";
import { thems } from "./Thems";

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0 auto;
    padding: 0 auto;
    
}

body {
  margin: 0;
  max-width: 100%;

  font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${thems.colors.text};
  background-color: ${thems.colors.primaryBg};
}

a {
    cursor: pointer;
    text-decoration: none;
    color: ${thems.colors.text};
}

a:hover {
    color: ${thems.colors.accent};
}

ul {
    list-style: none;
    
    padding: 0;
}

button {
    background-color: unset;
    border: transparent;
    border-radius: 5px;
    background-color: ${thems.colors.accent};

    cursor: pointer;
    color: ${thems.colors.title};
}

section {
    margin: 10px;
}
`;
