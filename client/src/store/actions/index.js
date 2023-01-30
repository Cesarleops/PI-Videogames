
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

export const alphabeticOrder = () => {
    return {
        type: "ALPHABETIC_ORDER",

    }
}

export const reverseAlphabeticOrder = () => {
    return {
        type: "REVERSE_ALPHABETIC_ORDER",
        
    }
}

export const orderByMostLiked = () => {
    return {
        type: "MOST_LIKED",
    
    }
}

export const orderByLessLiked = () => {
    return {
        type: "LESS_LIKED",
    }
}

export const filterByOriginals = () => {
    return {
        type: 'FILTER_BY_ORIGINALS',
        
    }
}

export const filterByCreated = () => {
    return {
        type: 'FILTER_BY_CREATED',
        
    }
}

export const filterByGenre = (payload) => {
    return {
        type: 'FILTER_BY_GENRE',
        payload
    }
}

export const getGameByName = (payload) => {
    return {
        type: 'GAME_BY_NAME',
        payload
    }
}

export const removeFilters = () => {
    return {
        type: 'REMOVE_FILTERS',
        
    }
}