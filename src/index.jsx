import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import {BrowserRouter} from 'react-router-dom';
import MainRoutes from './routes';
import Navbar from './components/navbar';
import { NAV_LINKS } from './contants';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar 
      
      imgSrc = {JSON.parse(localStorage.userData).map((data) => data.profile_image_url)}
      imgAlt = {JSON.parse(localStorage.userData).map((data) => data.login)}
      navLinks = {NAV_LINKS}
      
    />
    <MainRoutes/>
  </BrowserRouter>
);
