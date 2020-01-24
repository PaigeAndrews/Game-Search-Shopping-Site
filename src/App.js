import React from 'react'; 
import "./App.css";
import Cart from './Components/Cart';
import SelectedGame from './Components/SelectedGame';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { queryAllByAltText } from '@testing-library/dom';



function App() {


// Where the JSX will be written 
  return (
  <Router>
    
     
      <Route exact path="/" component={Home} />
      <Route  path="/cart" component={Cart} />
      <Route  path="/selectedgame" component={SelectedGame} />
      {/* <Route  path="/selectedgame/:name/:code" component={SelectedGame} /> */}
      

  </Router>
  );
};


export default App;
