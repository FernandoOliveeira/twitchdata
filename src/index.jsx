import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import {BrowserRouter} from 'react-router-dom';
import MainRoutes from './routes';
import Navbar from './components/navbar';
import { NAV_LINKS } from './constants';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar 
      
      imgSrc = {
        localStorage.getItem('userData')?

          JSON.parse(localStorage.userData).map((data) => data.profile_image_url)
        
        : '/game_default.png'
      }
      imgAlt = {
        localStorage.getItem('userData')?

          JSON.parse(localStorage.userData).map((data) => data.login)
        : 'Alt Image'
      }

      hide = {
        localStorage.getItem('userData')?
          ''
        : 'hide'
      }
      
      navLinks = {NAV_LINKS}
      
    />
    <MainRoutes/>
  </BrowserRouter>
);
