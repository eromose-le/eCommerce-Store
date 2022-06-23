import { GlobalStyles } from './theme/globalStyles';
import { COLOR_THEME } from './assets/constants';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyles theme={COLOR_THEME[0]} />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
