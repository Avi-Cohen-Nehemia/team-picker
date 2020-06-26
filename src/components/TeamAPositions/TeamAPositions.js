import React from "react";
import PlayerIcon from "../PlayerIcon";

const TeamAPositions = ({ teamAPlayers, teamAColor, teamAKit }) => (
    <div>
        <div
            style={{
                position: "absolute",
                top: "41%",
                left: "23%"
            }}
        >
            <PlayerIcon
                playerName={ teamAPlayers[0].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
                playerSkillLevel={ teamAPlayers[0].skillLevel }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "16%",
                left: "32%"
            }}
        >
            <PlayerIcon
                playerName={ teamAPlayers[1].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
                playerSkillLevel={ teamAPlayers[1].skillLevel }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "66%",
                left: "32%"
            }}
        >
            <PlayerIcon
                playerName={ teamAPlayers[2].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
                playerSkillLevel={ teamAPlayers[2].skillLevel }
            />
        </div>
        { teamAPlayers.length >= 4 ?
            <div
                style={{
                    position: "absolute",
                    top: "41%",
                    left: "32%"
                }}
            >
                <PlayerIcon
                    playerName={ teamAPlayers[3].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                    playerSkillLevel={ teamAPlayers[3].skillLevel }
                />
            </div>
        : null }

        { teamAPlayers.length >= 5 ?
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "40%"
                }}
            >
                <PlayerIcon
                    playerName={ teamAPlayers[4].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                    playerSkillLevel={ teamAPlayers[4].skillLevel }
                />
            </div>
        : null }

        { teamAPlayers.length === 6 ?
            <div
                style={{
                    position: "absolute",
                    top: "54%",
                    left: "40%"
                }}
            >
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