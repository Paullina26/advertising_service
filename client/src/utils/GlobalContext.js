import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isLoading,
    setIsLoading,
    isLogin,
    setIsLogin,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {/* {isLoading && <Loader />} */}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
