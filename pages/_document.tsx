// Copyright 2023 Pejman Ghorbanzade

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <base href="/" />
      </Head>
      <body className="bg-slate-100 font-sans antialiased dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
