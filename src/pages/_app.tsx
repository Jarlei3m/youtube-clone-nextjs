import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';
import MyThemeProvider from 'src/components/MyThemeProvider';
import { SettingsProvider } from 'src/contexts/SettingsContext';

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider session={pageProps.session}>
        <SettingsProvider>
          <MyThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </MyThemeProvider>
        </SettingsProvider>
      </Provider>
      <style global jsx>
        {`
          #nprogress {
            position: relative;
            z-index: 99999999;
          }
          #nprogress .bar {
            background: #f00 !important;
            height: 3px;
          }
        `}
      </style>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
