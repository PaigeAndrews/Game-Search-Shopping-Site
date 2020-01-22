import React from 'react'; 
import { Link } from 'react-router-dom';
import "./App.css";
import Game from "./Game";



const SelectedGame = ({name, released, image, platform, code}) => {

       
 
        console.log(name)
        console.log(code)
    


    return(
    <div className="selectedGameWrapper">



        <Link  to='/'>
            <h2> Home </h2>
        </Link>

        <Link to='/cart'>
            <h2> Cart </h2>
        </Link>

        <div className="shadow-5 br4 gameBlocks">
            <h1> I SWITCHED</h1>
            <div className="fw5 titleFont">{name}
            </div>
                <p>{platform}</p>
                <p className="rating">{released}</p>
            <div className="gameImage">
                <img src={image} alt=""/>
            </div>
        </div>
    </div>
    );
}

export default SelectedGame;