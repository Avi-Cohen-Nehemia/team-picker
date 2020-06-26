import React from "react";
import PlayerIcon from "../PlayerIcon";

const TeamAPositions = ({ teamAPlayers, teamAColor, teamAKit }) => (
    <div>
        <div
            style={{
                position: "absolute",
                top: "47%",
                left: "30%"
            }}
        >
            <PlayerIcon
                playerName={ teamAPlayers[0].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "30%",
                left: "38%"
            }}
        >
            <PlayerIcon
                playerName={ teamAPlayers[1].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "64%",
                left: "38%"
            }}
        >
            <PlayerIcon
                playerName={ teamAPlayers[2].name }
                teamColor={ teamAColor }
                teamKit={ teamAKit }
            />
        </div>
        { teamAPlayers.length >= 4 ?
            <div
                style={{
                    position: "absolute",
                    top: "47%",
                    left: "38%"
                }}
            >
                <PlayerIcon
                    playerName={ teamAPlayers[3].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                />
            </div>
        : null }

        { teamAPlayers.length >= 5 ?
            <div
                style={{
                    position: "absolute",
                    top: "37%",
                    left: "44%"
                }}
            >
                <PlayerIcon
                    playerName={ teamAPlayers[3].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                />
            </div>
        : null }

        { teamAPlayers.length === 6 ?
            <div
                style={{
                    position: "absolute",
                    top: "57%",
                    left: "44%"
                }}
            >
                <PlayerIcon
                    playerName={ teamAPlayers[3].name }
                    teamColor={ teamAColor }
                    teamKit={ teamAKit }
                />
            </div>
        : null }
    </div>
);

export default TeamAPositions;