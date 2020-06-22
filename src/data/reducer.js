//importing initialState to make it available to the reducer
import initialState from "./initialState";

// adding the new player to the playersPool
const addPlayerReducer = (state, action) => {
    return {
        ...state,
        playersPool: [...state.playersPool, action.playerName]
    }
};

// Fisher–Yates shuffle
const shuffle = (array) => {

    let newIndex;
    let temporaryIndex;

    for (let i = array.length - 1; i > 0; i =- 1) {

        // generate new random index for the value
        newIndex = Math.floor(Math.random() * (i + 1));

        // swap the values between the indexes
        temporaryIndex = array[i];
        array[i] = array[newIndex];
        array[newIndex] = temporaryIndex;
    }

    return array;
};

// suffle the playersPool
const shufflePlayersReducer = (state) => shuffle(...state.playersPool);

// generate team A
const generateTeamAReducer = (state) => {
    return state.playersPool.filter((_, index) => index < state.playersPool.length / 2);
}

// generate team B
const generateTeamBReducer = (state) => {
    return state.playersPool.filter((_, index) => index >= state.playersPool.length / 2);
}

// store teams A and B in state
const dividePlayersReducer = (state) => {
    return {
        ...state,
        teamA: generateTeamAReducer(),
        teamB: generateTeamBReducer(),
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayerReducer(state, action);
        case "GENERATE_TEAMS": return {...state};
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;