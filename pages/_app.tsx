import "../styles/global.css";
import React from "react";
import { ThemeGamification } from "@gamiui/standard";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeGamification>
      <Component {...pageProps} />
    </ThemeGamification>
  );
}

export default MyApp;
