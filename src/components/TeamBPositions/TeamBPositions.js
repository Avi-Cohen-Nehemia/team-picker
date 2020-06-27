import React from "react";
import PlayerIcon from "../PlayerIcon";

import "./../../assets/css/players-positions.css"

// team B poistions on the pitch-page
const TeamBPositions = ({ teamBPlayers, teamBColor, teamBKit }) => (
    <div>
        { teamBPlayers.map((player, index) => (
            <div key={ index } className={ "player-b-" + (index + 1) }>
                <PlayerIcon
                    playerName={ player.name }
                    teamColor={ teamBColor }
                    teamKit={ teamBKit }
                    playerSkillLevel={ player.skillLevel }
                />
            </div>
        )) }
    </div>
);

export default TeamBPositions;