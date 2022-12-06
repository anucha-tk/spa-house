import { AppProps } from 'next/app';

import '@/styles/colors.css';
import '@/styles/globals.css';

import Header from '@/components/layout/Header';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
