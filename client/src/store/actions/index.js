
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

export const getGenres = (payload) => {
    return {
        type: 'GET_GENRES',
        payload
    }
}
export const getGameById = (payload) => {
    return {
        type: "GET_GAME_BY_ID",
        payload
    }
}

export const alphabeticOrder = (payload) => {
    return {
        type: "ALPHABETIC_ORDER",
        payload
    }
}


export const orderByRating = (payload) => {
    return {
        type: "RATING_ORDER",
        payload
    }
}

export const orderByOrigin = (payload) => {
    return {
        type: 'ORDER_BY_ORIGIN',
        payload
    }
}

export const filterByGenre = (payload) => {
    return {
        type: 'FILTER_BY_GENRE',
        payload
    }
}