import React from 'react';
import { Global, css } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';

const GlobalStyles = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        @font-face {
          font-family: 'Aprova';
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url('fonts/aprova-sans/Aprova-Regular.woff2') format('woff2'),
            url('fonts/aprova-sans/Aprova-Regular.woff') format('woff');
        }

        @font-face {
          font-family: 'Aprova';
          font-weight: 800;
          font-style: normal;
          font-display: swap;
          src: url('fonts/aprova-sans/Aprova-Bold.woff2') format('woff2'),
            url('fonts/aprova-sans/Aprova-Bold.woff') format('woff');
        }

        @font-face {
          font-family: 'Aprova';
          font-weight: 900;
          font-style: normal;
          font-display: swap;
          src: url('fonts/aprova-sans/Aprova-Black.woff2') format('woff2'),
            url('fonts/aprova-sans/Aprova-Black.woff') format('woff');
        }

        @font-face {
          font-family: 'InterUI';
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url(fonts/inter-ui/Inter-UI-Regular.woff2) format('woff2'),
            url(fonts/inter-ui/Inter-UI-Regular.woff) format('woff');
        }

        @font-face {
          font-family: 'VanguardCF';
          font-style: normal;
          font-display: swap;
          src: url(fonts/vanguard/Vanguard-CF-Bold.otf) format('opentype');
        }

        html {
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />

    {children}
  </>
);

export default GlobalStyles;
