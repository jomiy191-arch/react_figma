import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Product from './pages/Servisec/Services';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="product" element={<Product />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
