

export const initialState = {
    games: [],
    gameDetail: [],
    isLoading: false,
    genres: [],
    platforms: ["Ps5", "Ps4", "PC" , "IOS", "Android", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
    filteredGames:[]
}

export const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case 'LOADING_GAMES' : 
            return {
                 ...state,
                 isLoading: true
            }
        case 'GET_GAMES':
            return {
                 ...state, 
                 games: action.payload,
                 filteredGames: action.payload,
                 isLoading: false 
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
                    games: [...state.filteredGames].sort((a,b) => {
                        if(a.name > b.name) return 1
                        if(a.name < b.name) return -1
                        return 0
                   })}

        case "REVERSE_ALPHABETIC_ORDER":
            return {
                ...state,
                games: [...state.filteredGames].sort((a,b) => {
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return 1
                    return 0
                })
            }
        case 'MOST_LIKED':
            return {
                 ...state, 
                 games: [...state.filteredGames].sort((a,b) => a.rating-b.rating)
                        }

        case 'LESS_LIKED':
            return {
               ...state, 
                games: [...state.filteredGames].sort((a,b) => b.rating-a.rating)
                                        }
        case 'FILTER_BY_ORIGINALS':
            return {
                ...state,
                games: state.filteredGames.filter(g => typeof g.id === 'number')
            }
        case 'FILTER_BY_CREATED':
                return {
                    ...state,
                    games: state.filteredGames.filter(g => typeof g.id === 'string')
                }
        case 'FILTER_BY_GENRE':
            return {
                ...state,
                games: state.filteredGames.filter(game => game.genres.find(g => g.name === action.payload))
            }
       
        case 'GAME_BY_NAME':
            return {
                ...state,
                games: action.payload
            }

        case 'REMOVE_FILTERS':
            return {
                ...state,
                games: state.filteredGames
            }
        default: return initialState
    }
}
