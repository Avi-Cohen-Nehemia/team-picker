
const reducer = (state, action) => {
    switch (action.type) {
        case "SOMETHING": return {...state};
        default: return state;
    }
}

export default reducer;