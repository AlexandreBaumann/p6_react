import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Error404 from './pages/404/404';
import Prezpage from './pages/prez-page/prez-page'
import logements from './mock/logements.json'

// import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path:"/a-propos/",
    element: <About />,
  },
  {
    path:"/404/",
    element: <Error404 />,
  },
  {
    path:"/fiche-produit/:id",
    element: <Prezpage  />,
  } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router = {router} />
    <Footer />
  </React.StrictMode>
);
