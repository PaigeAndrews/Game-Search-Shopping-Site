import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "../App.css";
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

            <h1> I SWITCHED</h1>
            <Game />
        </div>
    );
}

export default SelectedGame;

// const mapState = (props) => ({
//     name: props.match.params.name,
//     code: props.match.params.code
// })
// export default connect(
//     mapState
// )(SelectedGame);