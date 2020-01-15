import React from 'react';
import Game from './Game';




const GameList = ({ games }) => {
    return (
        <div>
            {
                 games.map((game) =>{
                   return(
                    <Game
                      key={game.name}
                      name={game.name}
                      // platform={}
                      rating={game.rating}
                     image={game.background_image} 
                    />
                    
                  );
            })
        }
        </div>
    );
}

export default GameList;