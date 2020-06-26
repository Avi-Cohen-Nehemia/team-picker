//importing initialState to make it available to the reducer
import initialState from "./initialState";

// adding the new player to the playersPool
const addPlayer = (state, action) => {
    if (state.playersPool.length < 12) {
        return {
            ...state,
            playersPool: [...state.playersPool, action.player]
        }
    } else {
        return {
            ...state,
            playersPool: [...state.playersPool],
        }
    }
};

// shuffle the players pool
const shufflePlayers = (state) => {
    return {
        ...state,
        playersPool: [...state.playersPool.sort(() => Math.random() - 0.5)]
    }
}


// generate the teams and store them in state
const generateTeams = (state) => {

    let firstHalf = state.playersPool.filter((_, index) => index < state.playersPool.length / 2);
    let secondHalf = state.playersPool.filter((_, index) => index >= state.playersPool.length / 2);

    return {
        ...state,
        teamA: {
            ...state.teamA,
            players: [...firstHalf],
        },
        teamB: {
            ...state.teamB,
            players: [...secondHalf],
        }
    }
}

// calculate the teams total skill level
const totalSkillLevel = (state) => {
    
    let teamASkill = state.teamA.players.reduce((acc, player) => {
        return acc + player.skillLevel.length
    }, 0)

    let teamBSkill = state.teamB.players.reduce((acc, player) => {
        return acc + player.skillLevel.length
    }, 0)

    return {
        ...state,
        teamA: {
            ...state.teamA,
            totalSkillLevel: teamASkill,
        },
        teamB: {
            ...state.teamB,
            totalSkillLevel: teamBSkill,
        }
    }
}

const selectTeamAKit = (state, action) => {
    return {
        ...state,
        teamA: {
            ...state.teamA,
            kit: action.teamA.kit
        },
    }
}

const selectTeamBKit = (state, action) => {
    return {
        ...state,
        teamB: {
            ...state.teamB,
            kit: action.teamB.kit
        },
    }
}

const selectTeamAColor = (state, action) => {
    return {
        ...state,
        teamA: {
            ...state.teamA,
            color: action.teamA.color
        },
    }
}

const selectTeamBColor = (state, action) => {
    return {
        ...state,
        teamB: {
            ...state.teamB,
            color: action.teamB.color
        },
    }
}

const setTeamsNames = (state, action) => {
    return {
        ...state,
        teamA: {
            ...state.teamA,
            name: action.teamA.name
        },
        teamB: {
            ...state.teamB,
            name: action.teamB.name
        },
    }
}

const incrementTeamAScore = (state) => {
    return {
    ...state,
        teamA: {
            ...state.teamA,
            score: +state.teamA.score + 1
        },
    }
}

const incrementTeamBScore = (state) => {
    return {
    ...state,
        teamB: {
            ...state.teamB,
            score: +state.teamB.score + 1
        },
    }
}

const resetScore = (state) => {
    return {
    ...state,
        teamA: {
            ...state.teamA,
            score: 0
        },
        teamB: {
            ...state.teamB,
            score: 0
        },
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "GENERATE_TEAMS": return totalSkillLevel(generateTeams(shufflePlayers(state)));
        case "SELECT_TEAM_A_KIT": return selectTeamAKit(state, action);
        case "SELECT_TEAM_B_KIT": return selectTeamBKit(state, action);
        case "SELECT_TEAM_A_COLOR": return selectTeamAColor(state, action);
        case "SELECT_TEAM_B_COLOR": return selectTeamBColor(state, action);
        case "SET_TEAMS_NAMES": return setTeamsNames(state, action);
        case "INCREMENT_TEAM_A_SCORE": return incrementTeamAScore(state);
        case "INCREMENT_TEAM_B_SCORE": return incrementTeamBScore(state);
        case "RESET_SCORE": return resetScore(state);
        case "RESET_GAME": return initialState;
        default: return state;
    }
};

export default reducer;