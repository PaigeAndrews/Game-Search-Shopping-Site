import React, {useEffect, useState} from 'react'; 
import Game from "./Game";
import "./index.css";
import { queryAllByAltText } from '@testing-library/dom';



function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
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
  }, [query]);

// pulling and awaiting the response from the gaming API
// const apiBase = "https://api.rawg.io/api/"
// const getGames = async () => {
//   const response = await fetch(`${apiBase}games?page=1&size=200x200`)
//   const data = await response.json()
//   setGames(data.results);
//   console.log(data)
// }

let apiBase = "https://api.rawg.io/api/games?page="
let getGames = async (p) => {
  const response = await fetch(`${apiBase}${p}`)
  const data = await response.json()
  setGames(data.results); 
  console.log(data)
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
      
      <div className=" pa1 m">
      {games.map(game =>(
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
