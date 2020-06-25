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

export const selectTeamAKit = (data) => {
    return {
        type: "SELECT_TEAM_A_KIT",
        teamA: {
            kit: data.selected,
        } 
    }
}

export const selectTeamBKit = (data) => {
    return {
        type: "SELECT_TEAM_B_KIT",
        teamB: {
            kit: data.selected,
        } 
    }
}

export const reset = () => {
    return {
        type: "RESET",
    }
}