import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './theme/globalStyles';
import { COLOR_THEME } from './assets/constants';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';

function App() {
  return (
    <>
      <GlobalStyles theme={COLOR_THEME[0]} />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
