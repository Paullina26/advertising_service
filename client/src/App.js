import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colors } from 'templates/theme.styles';
import { GlobalStyle } from 'styles/GlobalStyle.style';
import Layout from 'templates/Layout';
import HomePage from 'pages/Home';
import UserPanel from 'pages/UserPanel';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import GlobalProvider from 'utils/GlobalContext';

function App() {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout>
          <GlobalProvider>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/login' element={<Login />} />
              <Route path='/userPanel' element={<UserPanel />} />
            </Routes>
          </GlobalProvider>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
