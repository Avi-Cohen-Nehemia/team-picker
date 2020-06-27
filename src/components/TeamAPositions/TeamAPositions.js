import React from "react";
import PlayerIcon from "../PlayerIcon";

import "./../../assets/css/players-positions.css"

// team A poistions on the pitch-page
const TeamAPositions = ({ teamAPlayers, teamAColor, teamAKit }) => (
    <div>
        { teamAPlayers.map((player, index) => (
            <div key={ index } className={ "player-a-" + (index + 1) }>
                <PlayerIcon
                    playerName={ player.name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                    playerSkillLevel={ player.skillLevel }
                />
            </div>
        )) }
    </div>
);

export default TeamAPositions;