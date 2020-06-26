import React from "react";
import PlayerIcon from "../PlayerIcon";

const TeamBPositions = ({ teamBPlayers, teamBColor, teamBKit }) => (
    <div>
        <div
            style={{
                position: "absolute",
                top: "47%",
                right: "30%"
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
                top: "30%",
                right: "38%"
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
                top: "64%",
                right: "38%"
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
                    top: "47%",
                    right: "38%"
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
                    top: "37%",
                    right: "44%"
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
                    top: "57%",
                    right: "44%"
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