 import React, { useEffect, useState } from "react";

import GameCard from "../../components/gameCard";
import getTopGames from '../../functions/getTopGames';
import Loading from '../../components/loading';
import {RESPONSIVE} from '../../constants';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

 function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const getGames = async () => {
      await getTopGames();
      setIsLoading(false);
    }
    getGames();
  }, [])
  
  
  return (
    <>
    <div className="">
      <h1 className="center">Top Games</h1>
      </div>
      <div className="row">
        {
          isLoading ? (<Loading/>)
          
          :(
            <Carousel responsive={RESPONSIVE} infinite={true} >
              {
                JSON.parse(localStorage.topGames).map(
                  (game) => {
                    
                  return <GameCard
                    key = {game.id}
                    title = {game.name}
                    imgSrc = {game.box_art_url}
                    alt = {game.name}
                    grid='s12'
                  />
                })
              }
            </Carousel>
          )
        }
      </div>
    </>
  );
}

export default Home
