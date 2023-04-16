import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
  isLogged: false,
  setIsLogged: () => {},
});

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const values = {
    isLoading,
    setIsLoading,
    isLogged,
    setIsLogged,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {/* {isLoading && <Loader />} */}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
