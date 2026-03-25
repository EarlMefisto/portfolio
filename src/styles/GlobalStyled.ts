import { createGlobalStyle } from 'styled-components'
import { thems } from './Thems'

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${thems.colors.text};
  background-color: ${thems.colors.primaryBg};

  @media screen and (max-width: 1280px) {
    margin-top: 50px;
  }
}

[data-theme='light'] {
  background-color: ${thems.colors.primaryBgLightTheme};
  color: ${thems.colors.textLightTheme};

  h2 {
    color: ${thems.colors.titleLightTheme}
  }

  a {
    color: ${thems.colors.textLightTheme};
  }

  button {
    color: ${thems.colors.titleLightTheme};
  }
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
`
