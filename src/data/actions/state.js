export const addPlayer = (data) => {
    return {
        type: "ADD_PLAYER",
        player: {
            name: data.playerName,
            skillLevel: data.playerSkillLevel,
        } 
    };
};

export const generateTeams = () => {
    return {
        type: "GENERATE_TEAMS",
    }
}

export const selectKit = () => {
    return {
        type: "SELECT_KIT",
    }
}

export const reset = () => {
    return {
        type: "RESET",
    }
}