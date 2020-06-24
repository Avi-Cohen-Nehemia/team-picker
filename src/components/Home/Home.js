import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import logo from './../../assets/images/ball.png';
import Start from "../Start";

const Home = () => (
    <Jumbotron
        style={{
            position: "relative",
            top: "3rem",
            opacity: 0.7,
            backgroundColor: "black",
            color: "white"
        }}
    >
        <div className="justify-content-center d-flex align-items-center flex-column">
            <h1>
                <img src={ logo } alt="football" width="130" height="130"/>
                Welcome to Football Team Generator!
                <img src={ logo } alt="football" width="130" height="130"/>
            </h1>
            <h5 className="mb-5">
                <span role="img" aria-label="man-running">🏃‍♂️</span> Create players and split them randomly into 2 groups
            </h5>
            <h5 className="mb-5">
                <span role="img" aria-label="shirt">👕</span> Customize your teams
            </h5>
            <h5 className="mb-5">
                <span role="img" aria-label="laptop">💻</span> Share with your friends!
            </h5>
            <Start/>
        </div>
    </Jumbotron>
);

export default Home;