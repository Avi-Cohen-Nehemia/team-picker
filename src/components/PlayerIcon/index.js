import React from "react";

const PlayerIcon = ({ playerName, teamColor, teamKit }) => (
    <>  
        <span style={{ backgroundColor: teamColor }}>
            { teamKit }
        </span>
        <p>{ playerName }</p>
    </>
);

export default PlayerIcon;