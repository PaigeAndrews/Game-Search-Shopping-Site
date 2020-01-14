import React from 'react'; 


const Game = ({name, rating, image}) => {
    return(
        <div className="shadow-5 br4 gameBlocks">
            <div className="fw5 titleFont">{name}</div>
            <p>Platform</p>
            <p>{rating}</p>
            <div className="gameImage"><img src={image} alt=""/></div>
        </div>
    );
}

export default Game;