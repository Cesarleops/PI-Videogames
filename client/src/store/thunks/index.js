import axios from 'axios'
import { getGameById, getGames, getGenres, loadingGames } from '../actions'

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
        dispatch(getGameById({
            name:data.name,
            image: data.background_image,
            genres: data.genres,
            description: data.description,
            released: data.released,
            rating: data.rating,
            platforms: data.platforms
        }))
    }
}

export const fetchGenres = () => {
    return async(dispatch) =>{
       const {data} = await axios.get('http://localhost:3001/genres')
       dispatch(getGenres(data))
    }
}


export const createGame = (payload) => {
    return async(dispatch) => {
        axios.post('http://localhost:3001/videogames/addGame', payload)
    }
}