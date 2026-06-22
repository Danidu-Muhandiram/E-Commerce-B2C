import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/userLayout';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
