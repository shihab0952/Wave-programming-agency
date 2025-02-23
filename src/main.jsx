
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home';
import Blog from './pages/home/Blog';
import Services from './pages/home/Services';
import ErrorPage from './component/ErrorPage';
import Pricing from './pages/home/Pricing';
import Register from './component/Register';
import Login from './component/Login';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Parent Route */}
      <Route path='/' element={<App />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path='home' element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='services' element={<Services/>} />
        <Route path='freeTrail' element={<Pricing/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Route>

      {/* Register Route (outside App) */}
      <Route path='/register' element={<Register />} />
      <Route path='/logIn' element={<Login/>} />
    </Routes>
  </BrowserRouter>
);
