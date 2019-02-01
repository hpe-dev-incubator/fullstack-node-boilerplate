import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{
            __html: `
              html, body, div, span, applet, object, iframe,
              h1, h2, h3, h4, h5, h6, p, blockquote, pre,
              a, abbr, acronym, address, big, cite, code,
              del, dfn, em, img, ins, kbd, q, s, samp,
              small, strike, strong, sub, sup, tt, var,
              b, u, i, center,
              dl, dt, dd, ol, ul, li,
              fieldset, form, label, legend,
              table, caption, tbody, tfoot, thead, tr, th, td,
              article, aside, canvas, details, embed,
              figure, figcaption, footer, header, hgroup,
              main, menu, nav, output, ruby, section, summary,
              time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
              }

              a {
                text-decoration: none;
              }

              article, aside, details, figcaption, figure,
              footer, header, hgroup, main, menu, nav, section {
                display: block;
              }

              *[hidden] {
                  display: none;
              }
              body {
                line-height: 1;
                min-height: 100vh;
                width: 100%;
                background: #fff;
              }
              ol, ul {
                list-style: none;
              }
              blockquote, q {
                quotes: none;
              }
              blockquote:before, blockquote:after,
              q:before, q:after {
                content: '';
                content: none;
              }
              table {
                border-collapse: collapse;
                border-spacing: 0;
              }
              ::selection {
                background: greenyellow;
              }
              ::-moz-selection {
                background: greenyellow;
              }
              a:focus {
                border-color: #29f3bc;
                outline-color: #29f3bc;
              }
              `,
          }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
