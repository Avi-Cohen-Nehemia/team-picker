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

export const selectTeamAColor = (data) => {
    return {
        type: "SELECT_TEAM_A_COLOR",
        teamA: {
            color: data.color,
        } 
    }
}

export const selectTeamBColor = (data) => {
    return {
        type: "SELECT_TEAM_B_COLOR",
        teamB: {
            color: data.color,
        } 
    }
}

export const setTeamsNames = (data) => {
    return {
        type: "SET_TEAMS_NAMES",
        teamA: {
            name: data.teamAName
        },
        teamB: {
            name: data.teamBName
        } 
    }
}

export const reset = () => {
    return {
        type: "RESET",
    }
}