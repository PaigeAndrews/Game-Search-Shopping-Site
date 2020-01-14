import React from 'react'; 


const Game = ({name, rating, image}) => {
    return(
        <div className="shadow-5 br4 gameBlocks">
            <h1>{name}</h1>
            <p>Platform</p>
            <p>{rating}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Game;