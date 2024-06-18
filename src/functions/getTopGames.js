import api from "../api";

async function getTopGames() {

  const gamesResponse = await api.get(`${api.defaults.baseURL}/games/top?first=10`,{
    'headers':{
      'Authorization': `Bearer ${localStorage.accessToken}`
    } 
  });
  
  // Salva os top 10 jogos no local storage
  localStorage.topGames = JSON.stringify(gamesResponse.data.data);

    
}


export default getTopGames;
