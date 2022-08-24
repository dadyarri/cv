// noinspection HtmlRequiredTitleElement

import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import theme from "../libs/theme";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={"ru"}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          <Script src={"/scripts/ym.js"} strategy={"lazyOnload"} />
        </body>
      </Html>
    );
  }
}
