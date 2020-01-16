import React, {useEffect, useState} from 'react'; 
import Game from "./Game";
import "./index.css";
import { queryAllByAltText } from '@testing-library/dom';



function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('/game_pk');
  const [page, setPage] = useState(1);


  //let pagination = 1;
  const loadMoreCommit = () => {
    setPage(page + 1);
    let ok = page + 1;
    test(ok);
  };

   //pagination = pagination - 1;
  const loadBackCommit = () => {
    if(page > 1){
      setPage(page - 1);
    }
    let ok = page - 1;
    test(ok);
  };

  const test = (ok) => {
    console.group('Test:');
    console.log(ok);
    console.groupEnd();
    getGames(ok);
  }

  useEffect (   () => {
    getGames(page);
  }, []);


  useEffect ( () =>{
    getGameSeries();
  }, [query]);

let apiBase = "https://api.rawg.io/api/games"
let getGames = async (p) => {
  let response = await fetch(`${apiBase}?page=${p}`)
  //let response = await fetch("https://api.rawg.io/api/games/tomb raider/game-series")
  let data = await response.json()
  setGames(data.results); 
}


let getGameSeries = async () => {
  let response2 = await fetch(`${apiBase}${query}/game-series`)
  // let response2 = await fetch("https://api.rawg.io/api/games/tomb-raider/game-series")
  let data2 = await response2.json()
  console.log(data2, query)
  //setGames(data2.results);
  setGames(data2.results) 
  
}


const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}
// Where the HTML will be written 
  return (
    
    <div className="searchArea tc">
      <h1> Videogames Search</h1>
      <form onSubmit={getSearch} className= "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="submit-button" type="submit">
          Search
        </button>
      </form>

      <div>
         <p>You are on page: {page} </p>
         {page > 1 &&
          <button onClick={function(){loadBackCommit()}}>
            Back
          </button>
         }
         
         <button onClick={function(){loadMoreCommit()}}>
         Next page
        </button>
     </div>
      
      <div className="pa1 m">
        {games && games.map(game =>(
          <Game 
            key={game.name}
            name={game.name}
            platform={game.platforms[0].platform.name}
            rating={game.rating}
            image={game.background_image} 
          />
        ))}
      {/* <GameList /> */}
    </div>
    </div>
  );
};

export default App;
