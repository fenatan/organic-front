import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

const myTheme = extendTheme(theme);

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </ChakraProvider>
  );
}

export default App;
