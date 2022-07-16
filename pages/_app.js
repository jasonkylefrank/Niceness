import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../components/globalStyles";
import theme from './_theme';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
