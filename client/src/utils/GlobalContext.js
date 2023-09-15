import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalContext = createContext({
  isLoadingUser: false,
  setIsLoadingUser: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

const GlobalProvider = ({ children }) => {
  const location = useLocation();
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isLoadingUser,
    setIsLoadingUser,
    isLogin,
    setIsLogin,
  };

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (!token || isLogin) return;

    setIsLoadingUser(true);
    fetch('http://localhost:8080/api/auth/user', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          setIsLogin(true);
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoadingUser(false));
  }, []);

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {/* {isLoading && <Loader />} */}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
