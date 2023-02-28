import type { AppProps } from 'next/app';
import { appWithI18Next } from 'ni18n';

import { GlobalContextProvider } from '@/contexts';
import { ni18nConfig } from '@/ni18n.config';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
};

export default appWithI18Next(App, ni18nConfig);
