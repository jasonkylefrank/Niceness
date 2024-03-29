import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  //  I added this render method when I needed to add a font <link> in the <Head>... Next.js complained about
  //   it when I tried to put it in the <Head> in the _app page.
  render() {
    return (
        <Html lang="en">
            <Head>
              <link rel="shortcut icon" href="/favicon.svg" />
              <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
              <link
                  rel="stylesheet" 
                  href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}