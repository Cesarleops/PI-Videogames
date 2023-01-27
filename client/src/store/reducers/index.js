

export const initialState = {
    games: [],
    isLoading: false
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
                games: action.payload
            }
        default: return initialState
    }
}
