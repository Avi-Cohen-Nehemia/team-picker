import React from "react";
import footballPitch from './../../assets/images/footballPitch.jpg';
import Jumbotron from "react-bootstrap/Jumbotron";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const FootballPitch = ({ teamAPlayers, teamBPlayers, teamAName, teamBName, teamAKit, teamBKit, teamAColor, teamBColor }) => (
    <>
        <div className="d-flex justify-content-between">
            <Jumbotron
                style={{
                    position: "relative",
                    opacity: 0.7,
                    backgroundColor: "black",
                    top: "20vh",
                    right: "7rem"
                }}
            >
                <div>
                    <h1 style={{backgroundColor: teamAColor }}>{ teamAName }</h1>
                    <img
                        src={ teamAKit === 1 ? kit1 : (teamAKit === 2 ? kit2 : kit3) }
                        height="100"
                        width="100"
                        alt="team kit"
                        style={{
                            backgroundColor: teamAColor,
                            borderRadius: "5px"
                        }}
                    />
                </div>
            </Jumbotron>
            <Jumbotron
                style={{
                    position: "relative",
                    opacity: 0.7,
                    backgroundColor: "black",
                    top: "20vh",
                    left: "7rem"
                }}
            >
                <div>
                    <h1 style={{backgroundColor: teamBColor }}>{ teamBName }</h1>
                    <img
                        src={ teamBKit === 1 ? kit1 : (teamBKit === 2 ? kit2 : kit3) }
                        height="100"
                        width="100"
                        alt="team kit"
                        style={{
                            backgroundColor: teamBColor,
                            borderRadius: "5px"
                        }}
                    />
                </div>
            </Jumbotron>
        </div>
        <img
            src={ footballPitch }
            alt="football pitch"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        />

        <div>

        </div>
    </>
);

export default FootballPitch;