import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
  // Get nonce from headers (set by middleware)
  const nonce = props.__NEXT_DATA__?.props?.pageProps?.nonce || "";

  return (
    <Html lang="en">
      <Head nonce={nonce}>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=10" />
      </Head>
      <body className="antialiased font-sans">
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}
