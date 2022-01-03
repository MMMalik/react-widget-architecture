export const timeout = (waitFor: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, waitFor);
    });
};
