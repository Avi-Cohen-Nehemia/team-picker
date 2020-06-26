import React from "react";
import PlayerIcon from "../PlayerIcon";

const TeamBPositions = ({ teamBPlayers, teamBColor, teamBKit }) => (
    <div>
        <div
            style={{
                position: "absolute",
                top: "45%",
                right: "23%"
            }}
        >
            <PlayerIcon
                playerName={ teamBPlayers[0].name }
                teamColor={ teamBColor }
                teamKit={ teamBKit }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "20%",
                right: "32%"
            }}
        >
            <PlayerIcon
                playerName={ teamBPlayers[1].name }
                teamColor={ teamBColor }
                teamKit={ teamBKit }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "70%",
                right: "32%"
            }}
        >
            <PlayerIcon
                playerName={ teamBPlayers[2].name }
                teamColor={ teamBColor }
                teamKit={ teamBKit }
            />
        </div>

        { teamBPlayers.length >= 4 ?
            <div
                style={{
                    position: "absolute",
                    top: "45%",
                    right: "32%"
                }}
            >
                <PlayerIcon
                    playerName={ teamBPlayers[3].name }
                    teamColor={ teamBColor }
                    teamKit={ teamBKit }
                />
            </div>
        : null }

        { teamBPlayers.length >= 5 ?
            <div
                style={{
                    position: "absolute",
                    top: "34%",
                    right: "40%"
                }}
            >
                <PlayerIcon
                    playerName={ teamBPlayers[3].name }
                    teamColor={ teamBColor }
                    teamKit={ teamBKit }
                />
            </div>
        : null }

        { teamBPlayers.length === 6 ?
            <div
                style={{
                    position: "absolute",
                    top: "58%",
                    right: "40%"
                }}
            >
                <PlayerIcon
                    playerName={ teamBPlayers[3].name }
                    teamColor={ teamBColor }
                    teamKit={ teamBKit }
                />
            </div>
        : null }
    </div>
);

export default TeamBPositions;