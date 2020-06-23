import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import logo from './../../assets/images/ball.png';

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
        <h1>Welcome to Football Team Generator!<img src={ logo } alt="football" width="150" height="150"/></h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
    </Jumbotron>
);

export default Home;