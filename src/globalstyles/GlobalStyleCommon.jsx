import { createGlobalStyle } from "styled-components";

const GlobalStyleCommon = createGlobalStyle`
  html * {
    box-sizing: border-box;
    font-family: 'noto-sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    text-decoration: none;
    font-size: 1rem;
    margin: 0px;
    padding: 0px;
    list-style: none;
    line-height: 1.4;
    color: var(--color-black);
    font-weight: var(--font-weight-regular);
  }

  html {
    font-size: 1rem;
    min-width: 240px;
  }

  :root {
    /* color */
    --color-white: #fff;
    --color-black: #333;
    --color-grey: #ddd;
    --color-ivory: #F5FBEF;
    --color-violet: #503D42;

    --color-card-1: #92AD94;
    --color-card-2: #9492ad;
    --color-card-3: #ad9492;

    --color-green-1: #92AD94;
    --color-green-2: #748B75;
    --color-green-3: #84C318;

    /* border-radius */
    --border-radius: 5px;

    /* size */
    --size-padding: 20px;

    /* font-weight */
    --font-weight-thin: 100;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-weight-black: 900;

  }

  .text-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyleCommon;
