export const addPlayer = (data) => {
    return {
        type: "ADD_PLAYER",
        playerName: data.playerName,
    };
};