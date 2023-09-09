import { Routes, Route } from 'react-router-dom';
import Main from './components/layout/Main/Main';
import Home from './components/pages/Home/Home';
import SinglePageProduct from './components/pages/SinglePageProduct/SinglePageProduct';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Cart from './components/pages/CartPage/CartPage';
import Summary from './components/pages/Summary/Summary';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/product/:id" element={<SinglePageProduct />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default App;