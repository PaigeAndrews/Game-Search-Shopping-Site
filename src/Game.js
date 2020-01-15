import React from 'react'; 


const Game = ({name, rating, image, platform}) => {
    return(
        <div className="shadow-5 br4 gameBlocks">
            <div className="fw5 titleFont">{name}</div>
            <p>{platform}</p>
            <p className="rating">{rating}</p>
            <div className="gameImage">
                <img 
                    // style={{
                    //     width: 400,
                    //     height:200
                    // }}
                    src={image} alt=""/></div>
        </div>
    );
}

export default Game;