//importing initialState to make it available to the reducer
import initialState from "./initialState";

// adding the new player to the playersPool
const addPlayerReducer = (state, action) => {
    return {
        ...state,
        playersPool: [...state.playersPool, action.playerName]
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayerReducer(state, action);
        case "RESET": return initialState;
        default: return state;
    }
}

export default reducer;