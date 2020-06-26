import React from "react";
import PlayerIcon from "./../PlayerIcon";

const TeamAPositions = ({ teamAPlayers, teamAColor, teamAKit }) => (
    <div>
        <div
            style={{
                position: "absolute",
                top: "45%",
                right: "20%"
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
                top: "25%",
                right: "33%"
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
                top: "65%",
                right: "33%"
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
                    top: "45%",
                    right: "33%"
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
                    top: "35%",
                    right: "46%"
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
                    top: "55%",
                    right: "46%"
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