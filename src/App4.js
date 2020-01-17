import React, { useEffect, useState } from "react";
import Game from "./Game";
import "./index.css";
import { queryAllByAltText } from "@testing-library/dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      filteredGames: [],
      pageNumber: 1,
      search: ""
    };
  }

  componentDidMount() {
    this.getGames();
  }

  async getGames(ok) {
    const { pageNumber } = this.state;
    const apiBase = "https://api.rawg.io/api/games";
    const getGames = await fetch(`${apiBase}?page=${pageNumber}`);
    const data = await getGames.json();
    this.setState({
      games: data.results
    });
  }

  updateSearch = e => {
    const searchText = e.target.value;
    const { games } = this.state;
    const filteredGames = games.filter(game =>
      game.name.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({
      search: searchText,
      filteredGames: filteredGames
    });
  };

  loadMoreCommit = () => {
    const { pageNumber } = this.state;
    this.setState({
      pageNumber: pageNumber + 1
    }, () => {
      this.getGames();
    });
  };

  loadBackCommit = () => {
    const { pageNumber } = this.state;
    if (pageNumber > 1) {
      this.setState({
        pageNumber: pageNumber - 1
      }, () => {
        this.getGames();
      });
    }
  };

  // let getGames = async p => {
  //   let response = await fetch(`${apiBase}?page=${p}`);
  //   //let response = await fetch("https://api.rawg.io/api/games/tomb raider/game-series")
  //   let data = await response.json();
  //   setGames(data.results);
  // };

  // let getGameSeries = async () => {
  //   let response2 = await fetch(`${apiBase}${query}/game-series`);
  //   // let response2 = await fetch("https://api.rawg.io/api/games/tomb-raider/game-series")
  //   let data2 = await response2.json();
  //   console.log(data2, query);
  //   //setGames(data2.results);
  //   setGames(data2.results);
  // };

  // const updateSearch = e => {
  //   debugger;
  //   setSearch(e.target.value);
  // };

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search);
  // };

  render() {
    const { search, pageNumber, games, filteredGames } = this.state;
    return (
      <div className="searchArea tc">
        <h1> Videogames Search</h1>
        <form className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={this.updateSearch}
          />
          <button className="submit-button" type="submit">
            Search
          </button>
        </form>

        <div>
          <p>You are on page: {pageNumber} </p>
          {pageNumber > 1 && (
            <button onClick={this.loadBackCommit}>Back</button>
          )}

          <button onClick={this.loadMoreCommit}>Next page</button>
        </div>

        <div className="pa1 m">
          {games &&
            !search &&
            games.map((game, index) => (
              <Game
                key={index}
                name={game.name}
                platform={game.platforms[0].platform.name}
                rating={game.rating}
                image={game.background_image}
              />
            ))}
          {filteredGames &&
            search &&
            filteredGames.map((game, index) => (
              <Game
                key={index}
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
  }

  // const [games, setGames] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("/game_pk");
  // const [page, setPage] = useState(1);

  // //let pagination = 1;
  // const loadMoreCommit = () => {
  //   setPage(page + 1);
  //   let ok = page + 1;
  //   test(ok);
  // };

  // //pagination = pagination - 1;
  // const loadBackCommit = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  //   let ok = page - 1;
  //   test(ok);
  // };

  // const test = ok => {
  //   console.group("Test:");
  //   console.log(ok);
  //   console.groupEnd();
  //   getGames(ok);
  // };

  // useEffect(() => {
  //   getGames(page);
  // }, []);

  // useEffect(() => {
  //   getGameSeries();
  // }, [query]);
}

export default App;
