
export const loadingGames = () => {
    return {
        type: 'LOADING_GAMES'
    }
}
export const getGames = (payload) => {
    return {
        type: "GET_GAMES",
        payload
    }
}