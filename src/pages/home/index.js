 import React,{useEffect, useState} from "react";
 import api from "../../api";
 
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
      console.log(response.data);
      setGames(response.data.data);
    };

    fetchData();
  },[]);


  return (
    <>
      <h1>Top Games</h1>

      <div className="row">
        {
          games.map((game) => (

            <div className="col xl2 l3 m4 s6" key={game.id}>
              <div className="card">
                <div className="card-image">
                  <img src={game.box_art_url.replace('{width}', '235').replace('{height}', '314')}/>
                  <span className="card-title">{game.name}</span>
                </div>
              </div>
            </div>
            
          ))
        }

      </div>
    </>
  );
}

export default Home
