 import React,{useEffect, useState} from "react";
 import api from "../../api";
import Card from "../../components/gameCard";
 
 function Home() {
  /* codigo para pegar o accesss token
  useEffect(() =>{
    const fetchData = async () => {
      await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&grant_type=client_credentials`)
      .then(response => console.log(response.data));
    }
    fetchData();
  })
*/

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`${api.defaults.baseURL}/games/top?first=50`);
      console.log(response.data.data);
      setGames(response.data.data);
    };

    fetchData();
  },[]);


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
