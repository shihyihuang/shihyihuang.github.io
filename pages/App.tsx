import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '../styles/globals.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Playfair Display, serif',
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;