import React from "react";
import PlayerIcon from "../PlayerIcon";

const TeamAPositions = ({ teamAPlayers, teamAColor, teamAKit }) => (
    <div>
        <div
            style={{
                position: "absolute",
                top: "45%",
                left: "23%"
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
                top: "20%",
                left: "32%"
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
                top: "70%",
                left: "32%"
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
                    left: "32%"
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
                    top: "34%",
                    left: "40%"
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
                    top: "58%",
                    left: "40%"
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