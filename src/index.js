import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Error404 from './pages/404/404';
import Prezpage from './pages/prez-page/prez-page'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos/" element={<About />} />
      <Route path="/404/" element={<Error404 />} />
      <Route path="/fiche-produit/:id" element={<Prezpage  />} />
    </Routes>
    <Footer />
  </>
); 
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
