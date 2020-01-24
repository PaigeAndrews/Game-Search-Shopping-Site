import React from 'react'; 
import "../App.css";
import SelectedGame from './SelectedGame';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Game = ({name, released, image, platform, code}) => {

    


    const gameLogger = e => {
        
        console.log(name)
        console.log(e)
    }

    return(
  
    <Link to="/selectedgame" style={{ textDecoration: 'none' }}>
    
          
        <div className="shadow-5 br4 gameBlocks"  onClick={function(){gameLogger(code)}}>
            <div className="fw5 titleFont">{name}</div>
            <p>{platform}</p>
            <p>{code}</p>
            <p className="rating">{released}</p>
            <div className="gameImage">
                <img src={image} alt=""/>
            </div>
        </div>
    </Link>
   
    );
}

export default Game;