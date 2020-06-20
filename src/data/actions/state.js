export const doSomething = (data) => {
    return {
        type: "SOMETHING",
        ...data
    };
};