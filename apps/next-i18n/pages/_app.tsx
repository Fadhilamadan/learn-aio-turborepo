import type { AppProps } from 'next/app';
import { appWithI18Next, useSyncLanguage } from 'ni18n';

import { ni18nConfig } from '@/ni18n.config';

const App = ({ Component, pageProps }: AppProps) => {
  useSyncLanguage('id-ID');

  return <Component {...pageProps} />;
};

export default appWithI18Next(App, ni18nConfig);
