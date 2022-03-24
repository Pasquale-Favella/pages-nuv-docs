import type { AppProps } from 'next/app'
import Router from 'next/router';
import NProgress from 'nprogress';

import Layout from '../components/Layout';

import '../styles/globals.css';
import 'nprogress/nprogress.css';

//Bindings for progress router events

Router.events.on('routeChangeStart',()=>NProgress.start());
Router.events.on('routeChangeComplete',()=>NProgress.done());
Router.events.on('routeChangeError',()=>NProgress.done());


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

