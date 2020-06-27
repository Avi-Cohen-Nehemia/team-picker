import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import logo from "./../../assets/images/ball.png";
import Start from "../Start";
import "./../../assets/css/home.css";

const Home = () => (
    <Jumbotron className="home-container">
        <div className="home-main">
            <h1>Welcome to Football Team Generator!</h1>
            <img src={ logo } alt="football" width="130" height="130"/>
            <h5 className="mb-5">
                <span role="img" aria-label="man-running">🏃‍♂️</span> Create players and split them randomly into 2 groups
            </h5>
            <h5 className="mb-5">
                <span role="img" aria-label="shirt">👕</span> Customize your teams
            </h5>
            <h5 className="mb-5">
                <span role="img" aria-label="laptop">💻</span> Keep track of the scores and share with your friends!
            </h5>
            <Start/>
        </div>
    </Jumbotron>
);

export default Home;