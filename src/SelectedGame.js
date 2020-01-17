import React from 'react'; 


const Game = ({name, released, image, platform}) => {
    return(
        <div className="shadow-5 br4 gameBlocks">
            <div className="fw5 titleFont">{name}</div>
            <p>{platform}</p>
            <p className="rating">{released}</p>
            <div className="gameImage">
                <img src={image} alt=""/></div>
        </div>
    );
}

export default Game;