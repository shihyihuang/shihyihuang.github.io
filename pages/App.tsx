import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/globals.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Coming Soon", cursive',
      h6: {
      fontFamily: '"Coming Soon", cursive',
    },
  },
});


function App({ Component, pageProps }: AppProps) {
  console.log(JSON.stringify(theme, null, 2));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;