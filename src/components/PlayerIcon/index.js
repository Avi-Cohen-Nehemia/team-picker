import React from "react";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const PlayerIcon = ({ playerName, teamColor, teamKit }) => (
    <span className="d-flex justify-content-center align-items-center flex-column">
        <img
            src={ teamKit === 1 ? kit1 : (teamKit === 2 ? kit2 : kit3) }
            style={{ backgroundColor: teamColor }}
            height="50px"
            width="50px"
            alt="player icon"
        />
        <p style={{ backgroundColor: "white" }}>{ playerName }</p>
    </span>
);

export default PlayerIcon;