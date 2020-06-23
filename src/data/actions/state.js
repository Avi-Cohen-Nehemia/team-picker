export const addPlayer = (data) => {
    return {
        type: "ADD_PLAYER",
        playerName: data.playerName,
        playerStrength: data.playerStrength,
    };
};

export const generateTeams = () => {
    return {
        type: "GENERATE_TEAMS",
    }
}

export const reset = () => {
    return {
        type: "RESET",
    }
}