import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { AuthProvider } from 'contexts/auth';

const myTheme = extendTheme(theme);

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={myTheme}>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
