
import {useDispatch, useSelector} from 'react-redux'
import {  alphabeticOrder, filterByCreated, filterByGenre, filterByOriginals, loadingGames, orderByLessLiked, orderByMostLiked, removeFilters, reverseAlphabeticOrder } from "../../store/actions"
import { useEffect } from 'react'
import { fetchGenres } from '../../store/thunks'
import './searchBar.css'
export const SearchBar = () => {
    const dispatch = useDispatch()  
    useEffect(()=> {
        dispatch(fetchGenres())
     }, [dispatch])
    const genres = useSelector(state => state.genres)
    const handleSelect = ({target}) => {
        target.value === 'A-Z' ?
        dispatch(alphabeticOrder()) :
        dispatch(reverseAlphabeticOrder())
              
}
    const rankedGames = ({target}) => {
        target.value === 'asc' ?
           dispatch(orderByMostLiked()):
           dispatch(orderByLessLiked())
    }

    const handleInput = ({target})=> {
        target.value === 'original' ? 

            dispatch(filterByOriginals()) :
            dispatch(filterByCreated())
        } 
    

    const handleGenresInput = ({target}) => {
        dispatch(filterByGenre(target.value)) 
    }


    const handleClick = (e) => {
        dispatch(removeFilters())
    }
    return(
        <main>
            <section className='allFilters'>
                <section>
                <h4>Filter By Genre</h4>
                <select name="genres" onChange={handleGenresInput}>
                    <option>Genres</option>
                    {
                        genres && genres.map(g => (
                            <option key={g.id} value={g.name}>{g.name}</option>
                        ))
                    }
                </select>
                </section>
                <section>
                <h4>Filter by Origin</h4>
                <section>
                    <label htmlFor="original">Original</label>
                    <input type="radio" name="origin" value="original" id="original" onChange={handleInput}/>
                </section>
                <section>
                    <label htmlFor="created">Created</label>
                    <input type="radio" name="origin" value="created" id="created" onChange={handleInput}/>
                </section>
                </section>            

                <section>
                <h4>Alphabetical order</h4>
                <select onChange={handleSelect}>
                    <option>From</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                </section> 
                <section>
                <h4>Order by score</h4>
                <select onChange={rankedGames}>
                    <option>Score</option>
                    <option value="desc">Best Rated Games</option>
                    <option value="asc">Worst Rated Games</option>
                </select>
                </section>
                <section>
                    <button onClick={handleClick}>Default</button>
                </section>
            </section>

        </main>
    )
}