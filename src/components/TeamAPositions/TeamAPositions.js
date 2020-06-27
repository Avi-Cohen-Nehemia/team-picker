import React from "react";
import PlayerIcon from "../PlayerIcon";

import "./../../assets/css/team-a-positions.css"

// team A poistions on the pitch-page
const TeamAPositions = ({ teamAPlayers, teamAColor, teamAKit }) => (
    <div>
        <div className="player-1">
            <PlayerIcon
                playerName={ teamAPlayers[0].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
                playerSkillLevel={ teamAPlayers[0].skillLevel }
            />
        </div>
        <div className="player-2">
            <PlayerIcon
                playerName={ teamAPlayers[1].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
                playerSkillLevel={ teamAPlayers[1].skillLevel }
            />
        </div>
        <div className="player-3">
            <PlayerIcon
                playerName={ teamAPlayers[2].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
                playerSkillLevel={ teamAPlayers[2].skillLevel }
            />
        </div>


        {/* the rest of the players icons will appear only if these players were created */}
        { teamAPlayers.length >= 4 ?
            <div className="player-4">
                <PlayerIcon
                    playerName={ teamAPlayers[3].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                    playerSkillLevel={ teamAPlayers[3].skillLevel }
                />
            </div>
        : null }

        { teamAPlayers.length >= 5 ?
            <div className="player-5">
                <PlayerIcon
                    playerName={ teamAPlayers[4].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                    playerSkillLevel={ teamAPlayers[4].skillLevel }
                />
            </div>
        : null }

        { teamAPlayers.length === 6 ?
            <div className="player-6">
                <PlayerIcon
                    playerName={ teamAPlayers[5].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                    playerSkillLevel={ teamAPlayers[5].skillLevel }
                />
            </div>
        : null }
    </div>
);

export default TeamAPositions;