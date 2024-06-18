import React, { useEffect, useState } from 'react'

import getAccessToken from '../../functions/getAccessToken';
import getUserData from '../../functions/getUserData';
import Loading from '../../components/loading';

function Welcome() {

  const [isLoading, setIsLoading] = useState(false);
  

  
  const getInfo = async () => {

    try{
      if(localStorage.getItem('userData') === null){
        
      setIsLoading(true);
      
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
    
    
    
  }, [])

  console.log(JSON.parse(localStorage.userData));
  return (
    <div className='container center'>
      
      {
        isLoading ? (<Loading/>) : (<h1>Olá, {JSON.parse(localStorage.userData).map((data) => data.display_name)}</h1>)
      }
      
    </div>
    
  )
}

export default Welcome

