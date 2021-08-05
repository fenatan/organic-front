import { createGlobalStyle, css } from 'styled-components';

export const reset = `
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Aprova';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      url('fonts/aprova-sans/Aprova-Regular.woff2') format('woff2'),
      url('fonts/aprova-sans/Aprova-Regular.woff') format('woff');
  }

  @font-face{
    font-family: 'Aprova';
    font-weight: 800;
    font-style: normal;
    font-display: swap;
    src:
      url('fonts/aprova-sans/Aprova-Bold.woff2') format('woff2'),
      url('fonts/aprova-sans/Aprova-Bold.woff') format('woff');

  }

  @font-face{
    font-family: 'Aprova';
    font-weight: 900;
    font-style: normal;
    font-display: swap;
    src:
      url('fonts/aprova-sans/Aprova-Black.woff2') format('woff2'),
      url('fonts/aprova-sans/Aprova-Black.woff') format('woff');

  }

  @font-face {
    font-family: "InterUI";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      url(fonts/inter-ui/Inter-UI-Regular.woff2) format("woff2"),
      url(fonts/inter-ui/Inter-UI-Regular.woff) format("woff");
  }

  @font-face {
    font-family: "VanguardCF";
    font-style: normal;
    font-display: swap;
    src:
      url(fonts/vanguard/Vanguard-CF-Bold.otf) format("opentype");
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family.text};
      font-size: ${theme.font.sizes.medium};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      font-family: ${theme.font.family.title};
      margin: 0;
    }
  `}
`;

export default GlobalStyles;
