import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import '../styles/App.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default MyApp;