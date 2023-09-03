import { Routes, Route } from 'react-router-dom';
import Main from './components/layout/Main/Main';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/PageNotFound/PageNotFound';
import Cart from './components/pages/CartPage/CartPage';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default App;