import axios from 'axios'
import { getGames, loadingGames } from '../actions'

export const fetchGames = () => {
    return async(dispatch) => {
        dispatch(loadingGames())
        const {data} = await axios.get('http://localhost:3001/videogames')
        console.log(data.AllPages)
        dispatch(getGames(data.AllPages))

    }
}