import React, { useEffect, useState } from 'react'

import getAccessToken from '../../functions/getAccessToken';
import getUserData from '../../functions/getUserData';
import Loading from '../../components/loading';
import Button from '../../components/button';
import {WELCOME_PAGE_DESCRICAO_NETFLIX, WELCOME_PAGE_DESCRICAO_INSTAGRAM} from '../../constants'

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
    <div className='container'>
      
      {
        isLoading? 

        (<Loading/>) 
        
        :(
          <div className='center-align'>
            <h1>Olá, {JSON.parse(localStorage.userData).map((data) => data.display_name)}</h1>
            <h3>Escolha uma aplicação para testar:</h3>
            <br/>
            <div className='container row'>
              <div className='col s6'>
                <Button  
                  btnHref='home'
                  btnText='Netflix'
                />
                <br/>
               <p className='left-align'>{WELCOME_PAGE_DESCRICAO_NETFLIX.map((item) => item.descricao)}</p>
              </div>

              <div className='col s6'>
                <Button  
                  btnHref='instagram'
                  btnText='Instagram'
                />
                <br/>
                <p className='left-align'>{WELCOME_PAGE_DESCRICAO_INSTAGRAM.map((item) => item.descricao)}</p>
              </div>
            </div>
         </div>
        )
      }
      
    </div>
    
  )
}

export default Welcome

