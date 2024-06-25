 import React, { useEffect, useState } from "react";

import GameCard from "../../components/gameCard";
import getTopGames from '../../functions/getTopGames';
import Loading from '../../components/loading';


 function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {

    await getTopGames();
    setIsLoading(false);
  
  }, [])
  
  
  return (
    <div className="container">
      <h1 className="center">Top Games</h1>
      <div className="row">
        {
          isLoading ? (<Loading/>)
          
          :((JSON.parse(localStorage.topGames).map(
            (game) => (
            <GameCard 
              key = {game.id}
              title = {game.name}
              imgSrc = {game.box_art_url}
              alt = {game.name}

            />
              
          ))))
        }
      </div>
    </div>
  );
}

export default Home
