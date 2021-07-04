import "../styles/global.css";
import React from "react";
import { ThemeGamification } from "gamification-library";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeGamification>
      <Component {...pageProps} />
    </ThemeGamification>
  );
}

export default MyApp;
