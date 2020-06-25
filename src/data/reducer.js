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
        teamA: {
            ...state.teamA,
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

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "GENERATE_TEAMS": return generateTeams(shufflePlayers(state));
        case "SELECT_TEAM_A_KIT": return selectTeamAKit(state, action);
        case "SELECT_TEAM_B_KIT": return selectTeamBKit(state, action);
        case "SELECT_TEAM_A_COLOR": return selectTeamAColor(state, action);
        case "SELECT_TEAM_B_COLOR": return selectTeamBColor(state, action);
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;