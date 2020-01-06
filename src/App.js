import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  useEffect (   () => {
    getGames()
  }, []);

// pulling and awaiting the response from the gaming API
const getGames = async () => {
  const response = await fetch("https://api.rawg.io/api/platforms")
  const data = await response.json()
  console.log(data)
  console.log("Json test load.")
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
    </div>
  );
}

export default App;
