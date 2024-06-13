import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import Loading from '../../components/loading';
import getAccessToken from '../../functions/getAccessToken';

function Welcome() {

  useEffect(() => {
    if (localStorage.getItem('userData') === null) { 
      getAccessToken();
      
    }

  }, [])
  


  if (localStorage.getItem('topGames') !== null && localStorage.getItem('userData') !== null) {
    Navigate('/home')
    console.log('ta bom');
  }


  return (
    <>
      <Loading/>
    </>
    
  )
}

export default Welcome

