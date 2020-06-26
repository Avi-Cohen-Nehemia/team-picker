import React from "react";
import PlayerIcon from "../PlayerIcon";

const TeamBPositions = ({ teamBPlayers, teamBColor, teamBKit }) => (
    <div>
        <div
            style={{
                position: "absolute",
                top: "41%",
                right: "23%"
            }}
        >
            <PlayerIcon
                playerName={ teamBPlayers[0].name }
                teamColor={ teamBColor }
                teamKit={ teamBKit }
                playerSkillLevel={ teamBPlayers[0].skillLevel }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "16%",
                right: "32%"
            }}
        >
            <PlayerIcon
                playerName={ teamBPlayers[1].name }
                teamColor={ teamBColor }
                teamKit={ teamBKit }
                playerSkillLevel={ teamBPlayers[1].skillLevel }
            />
        </div>
        <div
            style={{
                position: "absolute",
                top: "66%",
                right: "32%"
            }}
        >
            <PlayerIcon
                playerName={ teamBPlayers[2].name }
                teamColor={ teamBColor }
                teamKit={ teamBKit }
                playerSkillLevel={ teamBPlayers[2].skillLevel }
            />
        </div>

        { teamBPlayers.length >= 4 ?
            <div
                style={{
                    position: "absolute",
                    top: "41%",
                    right: "32%"
                }}
            >
                <PlayerIcon
                    playerName={ teamBPlayers[3].name }
                    teamColor={ teamBColor }
                    teamKit={ teamBKit }
                    playerSkillLevel={ teamBPlayers[3].skillLevel }
                />
            </div>
        : null }

        { teamBPlayers.length >= 5 ?
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    right: "40%"
                }}
            >
                <PlayerIcon
                    playerName={ teamBPlayers[4].name }
                    teamColor={ teamBColor }
                    teamKit={ teamBKit }
                    playerSkillLevel={ teamBPlayers[4].skillLevel }
                />
            </div>
        : null }

        { teamBPlayers.length === 6 ?
            <div
                style={{
                    position: "absolute",
                    top: "54%",
                    right: "40%"
                }}
            >
                <PlayerIcon
                    playerName={ teamBPlayers[5].name }
                    teamColor={ teamBColor }
                    teamKit={ teamBKit }
                    playerSkillLevel={ teamBPlayers[5].skillLevel }
                />
            </div>
        : null }
    </div>
);

export default TeamBPositions;