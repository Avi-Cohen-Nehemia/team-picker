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
const shufflePlayers = (state) => {
    return {
        ...state,
        playersPool: shuffle(state.playersPool),
    }
}


// geneerate the teams and store them in state
const generateTeams = (state) => {

    let firstHalf = state.playersPool.filter((_, index) => index < state.playersPool.length / 2);
    let secondHalf = state.playersPool.filter((_, index) => index >= state.playersPool.length / 2);

    return {
        ...state,
        teamA: firstHalf,
        teamB: secondHalf,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "GENERATE_TEAMS": return generateTeams(shufflePlayers(state));
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;