import React, {useEffect, useState} from 'react'; 
import Game from "./Game";
import "./App.css";
import Cart from './Cart';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { queryAllByAltText } from '@testing-library/dom';



function App() {
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
 let data = await response.json()
  setGames(data.results); 
  console.log(data) 
  console.log(data.results)
}


let getGameSearch = async (search) => {
  let response2 = await fetch(`${apiBase}?search=${search}`)
  let data2 = await response2.json()
  setGames(data2.results) 
  console.log(data2) 
  console.log(data2.results) 
  console.log(search) 
  
}


let specificGamePage = async () =>{ 
  let response3 = await fetch(`${apiBase}`)
  let data3 = await response3.json()
  setGames(data3.results)
  console.log(data3.results)
};




const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  getGameSearch(search)
}


// Where the JSX will be written 
  return (
  <Router>
    <div className="searchArea tc">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch> 

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
      
    <div className="pa1 m" onClick={function(){specificGamePage()}}>

      
        { games.map(game =>(
      <Game 
        key={game.id}
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
</Router>
  );
};

const Home = () => (
  <div>
  </div>
);



export default App;
