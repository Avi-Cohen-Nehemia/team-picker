import React from "react";

//import styling and images
import "./../../assets/css/kits.css"
import kit1 from "./../../assets/images/kit1.png";
import kit2 from "./../../assets/images/kit2.png";
import kit3 from "./../../assets/images/kit3.png";

const PlayerIcon = ({ playerName, teamColor, teamKit, playerSkillLevel }) => (
    <span className="d-flex justify-content-center align-items-center flex-column">
        <span>{ playerSkillLevel }</span>
        <img
            src={ teamKit === 1 ? kit1 : (teamKit === 2 ? kit2 : kit3) }
            style={{ backgroundColor: teamColor }}
            className="kit-logo"
            alt="player icon"
        />
        <p style={{ backgroundColor: "white" }}>{ playerName }</p>
    </span>
);

export default PlayerIcon;