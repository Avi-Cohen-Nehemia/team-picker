import React from "react";
import PlayerIcon from "../PlayerIcon";

// import styling
import "./../../assets/css/players-positions.css"

// component to determine poistions on the pitch-page
const TeamPositions = ({ teamPlayers, teamColor, teamKit, team }) => (
    <>
        { teamPlayers.map((player, index) => (
            <div key={ index } className={ `player-${team}-${index + 1}` }>
                <PlayerIcon
                    playerName={ player.name }
                    teamColor={ teamColor }
                    teamKit={ teamKit }
                    playerSkillLevel={ player.skillLevel }
                />
            </div>
        )) }
    </>
);

export default TeamPositions;