import React from 'react'; 
import { Link } from 'react-router-dom';




const SelectedGame = ({name, released, image, platform}) => {
    return(
    <div>

    <Link  to='/'>
        <h2> Home </h2>
    </Link>

    <Link to='/cart'>
        <h2> Cart </h2>
    </Link>

        <div className="shadow-5 br4 gameBlocks">
            <h1>YOU SWITCHED PAGES</h1>
            <div className="fw5 titleFont">{name}</div>
            <p>{platform}</p>
            <p className="rating">{released}</p>
            <div className="gameImage">
                <img src={image} alt=""/></div>
        </div>
    </div>
    );
}

export default SelectedGame;