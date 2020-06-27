import React from "react";
import { Link } from "react-router-dom";
import footballPitch from './../../assets/images/footballPitch.jpg';
import './../../assets/css/pitch-page.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Reset from "./../Reset";
import Button from "react-bootstrap/Button";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';
import TeamAPositions from "./../TeamAPositions";
import TeamBPositions from "./../TeamBPositions";

const FootballPitch = ({
    teamAName,
    teamBName,
    teamAKit,
    teamBKit,
    teamAColor,
    teamBColor,
    teamAScore,
    teamBScore,
    handleTeamAScore,
    handleTeamBScore,
    handleResetScore
}) => (
    <>
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "2",
                height: "70%",
                width: "70%"
            }}
        >
            <TeamAPositions/>
            <TeamBPositions/>
        </div>
        <div
            className="d-flex justify-content-between align-items-center"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >      
            <Jumbotron className="team-panel-a">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1 
                        className="px-3 mb-4 text-center"
                        style={{ backgroundColor: teamAColor }}
                    >
                        { teamAName }
                    </h1>
                    <img
                        src={ teamAKit === 1 ? kit1 : (teamAKit === 2 ? kit2 : kit3) }
                        alt="team kit"
                        className="team-kit"
                        style={{ backgroundColor: teamAColor }}
                    />
                    <h1
                        style={{ color: "white" }}
                        className="mb-3"
                    >
                        { teamAScore }
                    </h1>
                    <Button
                        onClick={ handleTeamAScore }
                        className="px-5"
                        variant="success"
                    >
                        +
                    </Button>
                </div>
            </Jumbotron>
            <img
                src={ footballPitch }
                alt="football pitch"
            />
            <Jumbotron className="team-panel-b">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1 
                        className="px-3 mb-4 text-center"
                        style={{ backgroundColor: teamBColor }}
                    >
                        { teamBName }
                    </h1>
                    <img
                        src={ teamBKit === 1 ? kit1 : (teamBKit === 2 ? kit2 : kit3) }
                        alt="team kit"
                        className="team-kit"
                        style={{ backgroundColor: teamBColor }}
                    />
                    <h1
                        style={{ color: "white" }}
                        className="mb-3"
                    >
                        { teamBScore }
                    </h1>
                    <Button
                        onClick={ handleTeamBScore }
                        className="px-5"
                        variant="success"
                    >
                        +
                    </Button>
                </div>
            </Jumbotron>
        </div>
        <div
            className="d-flex justify-content-center"
            style={{ paddingTop: "90vh" }}
        >
            <Button
                onClick={ handleResetScore }
                variant="warning"
                className="mr-3"
            >
                Reset Score
            </Button>
            <Link to="/create-players">
                <Reset
                    text={ "Start Over" }
                    className="ml-3"
                />
            </Link>
        </div>
    </>
);

export default FootballPitch;