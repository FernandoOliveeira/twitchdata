import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

import M from 'materialize-css';
import { useEffect } from 'react';
import Welcome from './pages/welcome';


function MainRoutes(){

    // Materialize CSS
    useEffect(()=>{
        M.AutoInit();
    },[]);
    
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='*' element={<Navigate to='/home' replace/>}/>
        </Routes>
    )
}

export default MainRoutes;