import Head from 'next/head'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../components/globalStyles";
import theme from './_theme';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Niceness challenge!</title>
        {/* <meta name="description" content="" /> */}
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
