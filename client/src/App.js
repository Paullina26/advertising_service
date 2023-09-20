import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'templates/theme.styles';
import { GlobalStyle } from 'styles/globalStyle/GlobalStyle.style';
import Layout from 'templates/layouts/Layout';
import RoutesComponent from 'routes';
import GlobalProvider from 'utils/GlobalContext';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalProvider>
          <Layout>
            <RoutesComponent />
          </Layout>
        </GlobalProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
