import React, { useEffect, useState } from 'react'

import getAccessToken from '../../functions/getAccessToken';
import getUserData from '../../functions/getUserData';
import Loading from '../../components/loading';

function Welcome() {

  const [isLoading, setIsLoading] = useState(true);
  
  const getInfo = async () => {
    try{
      if(localStorage.getItem('userData') === null || localStorage.getItem('access_token') === null){

      getAccessToken();
      await getUserData();
    
      setIsLoading(false);
      }
            
    } catch(error){
      console.error('Error fetching data: ', error);
    }

  }
  
  useEffect(() => {
    
    getInfo();
    if(localStorage.getItem('userData') !== null){
      setIsLoading(false);
    }
    
  }, [])

  return (
    <div className='container center'>
      
      {
        isLoading ? (<Loading/>) : (<h1>Olá, {JSON.parse(localStorage.userData).map((data) => data.display_name)}</h1>)
      }
      
    </div>
    
  )
}

export default Welcome

