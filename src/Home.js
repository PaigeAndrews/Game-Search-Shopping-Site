import React, {useEffect, useState} from 'react'; 
import Game from "./Game";
import "./App.css";
import Cart from './Cart';
import SelectedGame from './SelectedGame';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { queryAllByAltText } from '@testing-library/dom';



function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
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

  useEffect ( () => {
    getGames(page);
    console.log("Ran effect 1")
  }, []);


let apiBase = "https://api.rawg.io/api/games"

let getGames = async (p) => {
let response = await fetch(`${apiBase}?page=${p}`)
 let dataPage = await response.json()
  setGames(dataPage.results);
}


let getGameSearch = async (search) => {
  let response2 = await fetch(`${apiBase}?search=${search}`)
  let dataSearch = await response2.json()
  setGames(dataSearch.results)
}


// let specificGamePage = async () =>{ 
//   let response3 = await fetch(`${apiBase}`)
//   let dataGame = await response3.json()
//   console.log(dataGame)
// };




const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  getGameSearch(search)
}



// Where the JSX will be written 
  return (
  <div>
    <div ><Link to="/Cart"><p className="cart">Cart</p>
    <img src="public/shopping-cart-icon.png"/></Link></div>

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
    
      
        { games.map(game =>(
      <Game 
        key={game["id"]}
        code={game["id"]}
        name={game.name}
        platform={game.platforms[0].platform.name}
        released={game.released}
        image={game.background_image} 
      />
      ))} 
       
    </div>

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

</div>
</div>
  );
};


export default Home;
