import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href={`${process.env.NEXT_PUBLIC_ASSETS || ''}/manifest.json`}/>
          <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_ASSETS || ''}/icon.png`}></link>
          <meta name="theme-color" content="#2a303c" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;