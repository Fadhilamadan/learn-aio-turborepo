import { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalContextProviderProps {
  children: ReactNode;
}

interface IGlobalContextProps {
  locals: 'id' | 'en';
  setLocals: (local: 'id' | 'en') => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const GlobalContext = createContext<IGlobalContextProps>({
  locals: 'id',
  setLocals: () => {},
  loading: true,
  setLoading: () => {},
});

export const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const [locals, setLocals] = useState<'id' | 'en'>('id');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <GlobalContext.Provider
      value={{
        locals,
        setLocals: setLocals,
        loading: isLoading,
        setLoading: setIsLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
