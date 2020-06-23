export const addPlayer = (data) => {
    return {
        type: "ADD_PLAYER",
        player: {
            name: data.playerName,
            strength: data.playerStrength,
        } 
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