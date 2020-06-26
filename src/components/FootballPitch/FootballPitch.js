import React from "react";
import { Link } from "react-router-dom";
import footballPitch from './../../assets/images/footballPitch.jpg';
import Jumbotron from "react-bootstrap/Jumbotron";
import Reset from "./../Reset";
import Button from "react-bootstrap/Button";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

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
            className="d-flex justify-content-between align-items-center"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >      
            <Jumbotron
                style={{
                    position: "relative",
                    opacity: 0.7,
                    backgroundColor: "black",
                    marginRight: "2rem",
                    width: "18rem",
                    height: "70%"
                }}
            >
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1 
                        className="px-3 mb-4"
                        style={{
                            backgroundColor: teamAColor,
                            textAlign: "center"
                        }}
                    >
                        { teamAName }
                    </h1>
                    <img
                        src={ teamAKit === 1 ? kit1 : (teamAKit === 2 ? kit2 : kit3) }
                        height="100"
                        width="100"
                        alt="team kit"
                        className="mb-3"
                        style={{
                            backgroundColor: teamAColor,
                            borderRadius: "5px"
                        }}
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
            <Jumbotron
                style={{
                    position: "relative",
                    opacity: 0.7,
                    backgroundColor: "black",
                    marginLeft: "2rem",
                    width: "18rem",
                    height: "70%"
                }}
            >
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1 
                        className="px-3 mb-4"
                        style={{
                            backgroundColor: teamBColor,
                            textAlign: "center"
                        }}
                    >
                        { teamBName }
                    </h1>
                    <img
                        src={ teamBKit === 1 ? kit1 : (teamBKit === 2 ? kit2 : kit3) }
                        height="100"
                        width="100"
                        alt="team kit"
                        className="mb-3"
                        style={{
                            backgroundColor: teamBColor,
                            borderRadius: "5px"
                        }}
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
            style={{
                paddingTop: "90vh"
            }}
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