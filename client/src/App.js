import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colors } from 'templates/theme.styles';
import { GlobalStyle } from 'styles/GlobalStyle.style';
import Layout from 'templates/Layout';
import HomePage from 'pages/Home';

function App() {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
