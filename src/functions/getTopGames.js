import api from "../api";

const getTopGames = () => {
  try {
    if(localStorage.getItem('topGames') === null){
      const fetchGamesData = async () => {
      const gamesResponse = await api.get(`${api.defaults.baseURL}/games/top?first=10`,{
        'headers':{
          'Authorization': `Bearer ${localStorage.accessToken}`
        } 
      }).catch((error) => {
          console.log('error ' + error.response);
      });
      
      console.log('access token = ' + localStorage.accessToken);
      //Salva os top 10 jogos no local storage
      localStorage.topGames = JSON.stringify(gamesResponse.data.data)
  
      };

      fetchGamesData();

      return true;
      
    }
    else{
      return false;
    }
        
  } catch (error) {
    console.log('error: ' + error.response);
  }
  
    
}


export default getTopGames;
