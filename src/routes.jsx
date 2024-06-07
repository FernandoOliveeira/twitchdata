import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

import M from 'materialize-css';
import { useEffect } from 'react';


function MainRoutes(){

    useEffect(()=>{
        M.AutoInit();
    },[]);
    
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}

export default MainRoutes;