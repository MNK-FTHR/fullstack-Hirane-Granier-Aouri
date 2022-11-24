import "../styles/globals.css";
import "my-lib-ui/dist/index.css";

import  { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;