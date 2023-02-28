import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return <>{t('hello')}</>;
};

export default Home;
