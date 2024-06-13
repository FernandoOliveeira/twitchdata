 import React from "react";
import GameCard from "../../components/gameCard";
import getAccessToken from "../../functions/getAccessToken";
 
 function Home() {
  
  return (
    <div className="container">
      <h1 className="center">Top Games</h1>
      <div className="row">
        {
          getAccessToken() ? (JSON.parse(localStorage.topGames).map((game) => (
          <GameCard 
            key = {game.id}
            title = {game.name}
            imgSrc = {game.box_art_url}
            alt = {game.name}
            
          />
          
          )) ): (console.log('testing'))
        }
      </div>
    </div>
  );
}

export default Home
