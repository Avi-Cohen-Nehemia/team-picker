
const reducer = (state, action) => {
    switch (state, action) {
        case "SOMETHING": return {...state};
        default: return state;
    }
}

export default reducer;