import React, {useEffect, useState} from 'react'; 
import Game from "./Game";
import "./App.css";
import { queryAllByAltText } from '@testing-library/dom';



function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect (   () => {
    getGames()
  }, [query]);

// pulling and awaiting the response from the gaming API
const apiBase = "https://api.rawg.io/api/"
const getGames = async () => {
  const response = await fetch(`${apiBase}games?size=200x200`)
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
      
      <div className=" pa1 w-30 flex flex-wrap m">
      {games.map(game =>(
        <Game 
          key={game.name}
          name={game.name}
          // platform={}
          rating={game.rating}
         image={game.background_image} 

        />
      ))}
    </div>
    </div>
  );
};

export default App;
