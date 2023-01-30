import axios from 'axios'
import { getGameById, getGameByName, getGames, getGenres, loadingGames } from '../actions'

export const fetchGames = () => {
    return async(dispatch) => {
        dispatch(loadingGames())
        const {data} = await axios.get('http://localhost:3001/videogames')
        dispatch(getGames(data.AllPages))

    }
}


export const fetchGameById = (id) => {
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/videogames/${id}`)
        console.log('juego especifico',data)
        id.includes('-') ? 
        dispatch(getGameById({
            _id: data._id,
            name:data.name,
            image: data.background_image,
            genres: data.genres,
            description: data.description,
            released: data.released,
            rating: data.rating,
            platforms: data.platforms
        })):
        dispatch(getGameById({
            name:data.name,
            image: data.background_image,
            genres: data.genres,
            description: data.description_raw,
            released: data.released,
            rating: data.rating,
            platforms: data.platforms
        }))
    }
}


export const fetchGameByName = (name) => {
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        dispatch(getGameByName(data))
    }

}
export const fetchGenres = () => {
    return async(dispatch) =>{
       const {data} = await axios.get('http://localhost:3001/genres')
       dispatch(getGenres(data))
    }
}


export const createGame = (newGame) => {
    return async(dispatch) => {
       const result = await axios.post('http://localhost:3001/videogames/addGame', newGame)
       console.log('result',result)
    }
}