import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-primary: #c4fff9;
    --color-secondary: #68d8d6;
    --color-tertiary: #07beb8;
    --color-dark: #2b2c28;
    --color-white: #fbfbfb;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Poppins, Arial, Helvetica, sans-serif;
    background-color: var(---color-white);
    color: var(--color-dark);
  }

  input, button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
