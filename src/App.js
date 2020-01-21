import React from 'react'; 
import "./App.css";
import Cart from './Cart';
import SelectedGame from './SelectedGame';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { queryAllByAltText } from '@testing-library/dom';



function App() {


// Where the JSX will be written 
  return (
  <Router>
    
     
      <Route exact path="/" component={Home} />
      <Route  path="/cart" component={Cart} />
      <Route path="/selectedgame" component={SelectedGame} />
      

  </Router>
  );
};


export default App;
