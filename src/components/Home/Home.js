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
                Welcome to Football Team Generator!
                <img src={ logo } alt="football" width="150" height="150"/>
            </h1>
            <h6>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </h6>
            <br/>
            <h6>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </h6>
            <br/>
            <Start/>
        </div>
    </Jumbotron>
);

export default Home;