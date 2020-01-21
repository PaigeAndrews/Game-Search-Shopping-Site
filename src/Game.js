import React from 'react'; 



const Game = ({name, released, image, platform, code}) => {

    const gameLogger = e => {
        
        console.log(e)
    }

    return(
        <div className="shadow-5 br4 gameBlocks" onClick={function(){gameLogger(code)}}>
            <div className="fw5 titleFont">{name}</div>
            <p>{platform}</p>
            <p>{code}</p>
            <p className="rating">{released}</p>
            <div className="gameImage">
                <img src={image} alt=""/>
            </div>
        </div>
    );
}

export default Game;