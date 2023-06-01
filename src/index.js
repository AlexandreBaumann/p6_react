import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Error404 from './pages/404/404';
import Prezpage from './pages/prez-page/prez-page'

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
    path:"/prezpage/",
    element: <Prezpage />,
  } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router = {router} />
    <Footer />
  </React.StrictMode>
);
