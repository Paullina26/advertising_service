import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

const GlobalProvider = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isLoading,
    setIsLoading,
    isLogin,
    setIsLogin,
  };

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    console.log({ token });
    if (!token || isLogin) return;

    fetch('http://localhost:8080/api/auth/user', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        if (data.name) {
          setIsLogin(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {/* {isLoading && <Loader />} */}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
