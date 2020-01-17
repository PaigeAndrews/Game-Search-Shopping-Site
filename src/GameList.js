import React from 'react';
import Game from './Game';




// const GameList = ({ games }) => {
//     return (
//         <div>
//             {
//                  games.map((game) =>{
//                    return(
//                     <Game
//                       key={game.name}
//                       name={game.name}
//                       // platform={}
//                       rating={game.rating}
//                      image={game.background_image} 
//                     />
                    
//                   );
//             })
//         }
//         </div>
//     );
// }




const GameList = ({ games }) => {
  return (
    <div>
  {games.map(game =>(
  <Game 
    key={game.name}
    name={game.name}
    platform={game.platforms[0].platform.name}
    released={game.released}
    image={game.background_image} 
  />
))}
</div>
  );
  }

  
export default GameList;