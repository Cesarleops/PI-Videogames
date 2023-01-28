

export const initialState = {
    games: [],
    gameDetail: [],
    isLoading: false,
    genres: [],
    platforms: ["Ps5", "Ps4", "PC" , "IOS", "Android", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
    newGames:[]
}

export const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case 'LOADING_GAMES' : 
            return {
                 ...state,
                 isLoading: !state.isLoading
            }
        case 'GET_GAMES':
            return {
                 ...state, 
                 games: action.payload,
                 newGames: action.payload
            }
        
        case 'GET_GENRES' : 
            return {
                ...state,
                genres: action.payload
            }
        case 'GET_GAME_BY_ID':
            return {
                 ...state,
                 gameDetail: action.payload
            }
        case 'ALPHABETIC_ORDER':
            return {
                 ...state, 
                 games: action.payload
                       }
        case 'RATING_ORDER':
            return {
                 ...state, 
                 games: action.payload 
                        }

        case 'ORDER_BY_ORIGIN':
            return {
                ...state,
                games: action.payload
            }
        
        case 'FILTER_BY_GENRE':
            return {
                ...state,
                games: action.payload
            }
       
        default: return initialState
    }
}
