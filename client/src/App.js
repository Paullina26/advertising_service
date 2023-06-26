import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'templates/theme.styles';
import { GlobalStyle } from 'styles/GlobalStyle.style';
import Layout from 'templates/Layout';
import RoutesComponent from 'routes';
import GlobalProvider from 'utils/GlobalContext';
import LayoutUserPanel from 'templates/LayoutUserPanel';
import Banner from 'components/Advertisement/Banner';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalProvider>
          <Layout>
            <Banner />
            <RoutesComponent />
          </Layout>
        </GlobalProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
