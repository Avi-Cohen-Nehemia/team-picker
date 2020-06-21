//importing initialState to make it available to the reducer
import initialState from "./initialState";

const reducer = (state, action) => {
    switch (action.type) {
        case "SOMETHING": return {...state};
        case "RESET": return initialState;
        default: return state;
    }
}

export default reducer;