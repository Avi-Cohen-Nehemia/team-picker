import React from "react";
import PlayerIcon from "./../PlayerIcon";

const TeamAPositions = ({ teamAPlayers, teamAColor, teamAKit }) => (
    <>  
        <PlayerIcon
            playerName={ teamAPlayers[0] }
            teamColor={ teamAColor }
            teamKit={ teamAKit }
        />
        <PlayerIcon
            playerName={ teamAPlayers[1] }
            teamColor={ teamAColor }
            teamKit={ teamAKit }
        />
        <PlayerIcon
            playerName={ teamAPlayers[2] }
            teamColor={ teamAColor }
            teamKit={ teamAKit }
        />
        <PlayerIcon
            playerName={ teamAPlayers[3] }
            teamColor={ teamAColor }
            teamKit={ teamAKit }
        />
        <PlayerIcon
            playerName={ teamAPlayers[4] }
            teamColor={ teamAColor }
            teamKit={ teamAKit }
        />
        <PlayerIcon
            playerName={ teamAPlayers[5] }
            teamColor={ teamAColor }
            teamKit={ teamAKit }
        />
    </>
);

export default TeamAPositions;