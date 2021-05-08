import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { getCssString } from '../stitches.config';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
