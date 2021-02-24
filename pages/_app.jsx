import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from 'styles/customTheme';
import '../styles/globals.css';

const theme = extendTheme(customTheme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
