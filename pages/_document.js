import Document, { Head, Main, NextScript } from "next/document";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TAG;

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#000" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Import Assistance Services in India. Have our team on field getting your work done locally and on time. Fieldwork, inspections, market research and more at economical rates."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="twitter:card"
            value="Import Assistance Services in India. Have our team on field getting your work done locally and on time. Fieldwork, inspections, market research and more at economical rates."
          />

          <meta property="og:title" content="importaid" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="http://www.importaid.com/" />
          <meta
            property="og:image"
            content="http://importaid.com/mainlogo.jpg"
          />
          <meta property="og:site_name" content="importaid.com" />
          <meta
            property="og:description"
            content="Import Assistance Services in India. Have our team on field getting your work done locally and on time. Fieldwork, inspections, market research and more at economical rates."
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
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
