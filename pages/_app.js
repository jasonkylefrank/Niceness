import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../components/_globalStyles";
import theme from '../components/_theme';


function MyApp({ Component, pageProps }) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const componentWithLayout = getLayout(<Component {...pageProps} />);

  return (
    <>
      <Head>
        {/* Also see Head stuff in other places such as the Layout component */}
        {/* <meta name="description" content="" /> */}
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {componentWithLayout}
      </ThemeProvider>
    </>
  );
}

export default MyApp
