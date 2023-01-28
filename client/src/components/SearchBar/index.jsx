
import {useDispatch, useSelector} from 'react-redux'
import {  alphabeticOrder, filterByGenre, loadingGames, orderByOrigin, orderByRating } from "../../store/actions"
import { useEffect } from 'react'
import { fetchGames, fetchGenres } from '../../store/thunks'
export const SearchBar = () => {
    const dispatch = useDispatch()  
    useEffect(()=> {
        dispatch(fetchGames())
        dispatch(fetchGenres())
     }, [])
    const games = useSelector(state => state.games)
    const filteredGames = useSelector(state => state.newGames)
    const genres = useSelector(state => state.genres)
    const handleSelect = ({target}) => {
               target.value === 'A-Z' ? games.sort((a,b) => {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0
            }) :  games.sort((a,b) => {
                if(a.name > b.name) return -1
                if(a.name < b.name) return 1
                return 0
            })
            dispatch(alphabeticOrder(games))
            dispatch(loadingGames())    
}
    const rankedGames = ({target}) => {
        target.value === 'asc' ? games.sort((a,b) => a.rating-b.rating) :
        games.sort((a,b) => b.rating-a.rating)
        dispatch(orderByRating(games))
        dispatch(loadingGames())
    }

    const handleInput = ({target})=> {
        if(target.value === 'original'){
            const original = filteredGames.filter(g => typeof g.id === 'number')
            console.log('original',original)
            dispatch(orderByOrigin(original))
           
        } else {
            const created = filteredGames.filter(g => g.id.toString().includes('-'))
            console.log('created', created)
            dispatch(orderByOrigin(created))
            dispatch(loadingGames())

        } 
    }

    const handleGenres = ({target}) => {
        const gamesByGenre = games.filter(game => game.genres.find(g => g.name === target.value) )
        dispatch(filterByGenre(gamesByGenre)) 
        dispatch(loadingGames())

        
    }
    return(
        games ? ( <main>
            <section>
                <select name="genres" onChange={handleGenres}>
                    <option>Genres</option>
                    {
                        genres && genres.map(g => (
                            <option key={g.id} value={g.name}>{g.name}</option>
                        ))
                    }
                </select>
                <label htmlFor="original">Original</label>
                <input type="radio" name="origin" value="original" id="original" onChange={handleInput}/>
                <label htmlFor="created">Created</label>
                <input type="radio" name="origin" value="created" id="created" onChange={handleInput}/>
                <select onChange={handleSelect}>
                    <option>Filter by Name :</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select onChange={rankedGames}>
                    <option>Filter by rating:</option>
                    <option value="desc">Best Rated Games</option>
                    <option value="asc">Worst Rated Games</option>
                </select>

            </section>
        </main>) : ''
       
    )
}