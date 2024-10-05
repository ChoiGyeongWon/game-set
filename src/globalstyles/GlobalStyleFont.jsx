import { createGlobalStyle } from "styled-components";

import NotoSansCJKkrThin from "../assets/fonts/NotoSansCJKkr-Thin.woff";
import NotoSansCJKkrLight from "../assets/fonts/NotoSansCJKkr-Light.woff";
import NotoSansCJKkrRegular from "../assets/fonts/NotoSansCJKkr-Regular.woff";
import NotoSansCJKkrMedium from "../assets/fonts/NotoSansCJKkr-Medium.woff";
import NotoSansCJKkrBold from "../assets/fonts/NotoSansCJKkr-Bold.woff";
import NotoSansCJKkrBlack from "../assets/fonts/NotoSansCJKkr-Black.woff";

const GlobalStyleFont = createGlobalStyle`
  @font-face {
    font-family: 'noto-sans';
    font-style: normal;
    font-weight: 100;
    src: url(${NotoSansCJKkrThin}) format('woff');
  }

  @font-face {
    font-family: 'noto-sans';
    font-style: normal;
    font-weight: 300;
    src: url(${NotoSansCJKkrLight}) format('woff');
  }

  @font-face {
    font-family: 'noto-sans';
    font-style: normal;
    font-weight: 400;
    src: url(${NotoSansCJKkrRegular}) format('woff');
  }

  @font-face {
    font-family: 'noto-sans';
    font-style: normal;
    font-weight: 500;
    src: url(${NotoSansCJKkrMedium}) format('woff');
  }

  @font-face {
    font-family: 'noto-sans';
    font-style: normal;
    font-weight: 700;
    src: url(${NotoSansCJKkrBold}) format('woff');
  }

  @font-face {
    font-family: 'noto-sans';
    font-style: normal;
    font-weight: 900;
    src: url(${NotoSansCJKkrBlack}) format('woff');
  }

`;

export default GlobalStyleFont;
