 import React,{useEffect, useState} from "react";
 import api from "../../api";
import Card from "../../components/gameCard";
 
 function Home() {

  const [games, setGames] = useState([]);
  const [userData, setUserData] = useState([]);

  

  // Get Top Games
  useEffect(() => {
    const hash = new URLSearchParams(document.location.hash.slice(1));

    const fetchGamesData = async () => {
      const gamesResponse = await api.get(`${api.defaults.baseURL}/games/top?first=5`,{
        'headers':{
          'Authorization': `Bearer ${hash.get('access_token')}`
        } 
      });
      console.log(gamesResponse.data.data);
      setGames(gamesResponse.data.data);
    };

    fetchGamesData();
  },[]);


  // Get user data
  useEffect(() => {
    const hash = new URLSearchParams(document.location.hash.slice(1));

    const fetchUserData = async() => {
      
    const userDataResponse = await api.get(`${api.defaults.baseURL}/users`,{
      'headers':{
        'Authorization': `Bearer ${hash.get('access_token')}`
      } 
    });
    setUserData(userDataResponse.data.data);
    
    console.log(userDataResponse.data.data);

    }

    fetchUserData();
  },[])



  return (
    <div className="container">
      <h1 className="center">Top Games</h1>
      <div className="row">
        {
          games.map((game) => (
            <Card 
              key = {game.id}
              title = {game.name}
              imgSrc = {game.box_art_url}
              alt = {game.name}
              
            />
          ))
        }
      </div>
    </div>
  );
}

export default Home
