import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colors } from 'templates/theme.styles';
import { GlobalStyle } from 'styles/GlobalStyle.style';
import Layout from 'templates/Layout';
import RoutesComponent from 'routes';

import GlobalProvider from 'utils/GlobalContext';

function App() {
  return (
    <Router>
      <ThemeProvider theme={colors}>
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
