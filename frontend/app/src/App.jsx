import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/userLayout';
import StoreProvider from './context/StoreProvider';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="men" element={<Shop key="men" gender="men" />} />
            <Route path="women" element={<Shop key="women" gender="women" />} />
            <Route path="product/:slug" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
