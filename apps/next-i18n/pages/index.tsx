import { useTranslation } from 'react-i18next';
import { useSyncLanguage } from 'ni18n';

import { useGlobalContext } from '@/contexts';

const Home = () => {
  const { t } = useTranslation();
  const { locals, setLocals } = useGlobalContext();

  useSyncLanguage(locals);

  const handleLocales = (e: any) => {
    setLocals(e.target.value);
  };

  return (
    <>
      <input type="radio" name="locales" value="id" onChange={handleLocales} />
      <label>Indonesia</label>
      <br />

      <input type="radio" name="locales" value="en" onChange={handleLocales} />
      <label>English</label>
      <br />

      <br />

      {t('hello')}
    </>
  );
};

export default Home;
