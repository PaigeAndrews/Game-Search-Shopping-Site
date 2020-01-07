import React, {useEffect, useState} from 'react'; 
import Game from "./Game";
import "./App.css";



function App() {
  const [games, setGames] = useState([]);

  useEffect (   () => {
    getGames()
  }, []);

// pulling and awaiting the response from the gaming API
const apiBase = "https://api.rawg.io/api/"
const getGames = async () => {
  const response = await fetch(`${apiBase}games`)
  const data = await response.json()
  setGames(data.results);
  console.log(data)
}

// Where the HTML will be written 
  return (
    <div className="searchArea">
      <h1> Videogames Search</h1>
      <form>
        <input type="text" placeholder="Search..."/>
        <button className="submitButton" type="submit">
          Search
        </button>
      </form>
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
  );
};

export default App;
