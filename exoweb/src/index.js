import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Team from './pages/team';
import Home from './pages/home';
import Contact from './pages/contact';
import Sponsors from './pages/sponsors';
import Gallery from './pages/gallery';
import Team2025 from './pages/team2025';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'team',
    element: <Team />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'sponsors',
    element: <Sponsors />
  },
  {
    path: 'gallery',
    element: <Gallery />
  },
  {
    path: 'team2025',
    element: <Team2025 />
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
