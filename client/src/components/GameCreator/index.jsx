import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import './gameCreation.css'
import { useEffect } from "react"
import { createGame, fetchGenres } from "../../store/thunks"
import { useState } from "react"
import { loadingGames } from "../../store/actions"
export const CreateNewGame = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchGenres())
     }, [])
    const genres = useSelector(state => state.genres)
    const platforms = useSelector(state => state.platforms)
    const [initialForm, setInitialForm]=useState({
        name: '',
        description: '',
        rating: '',
        released: '',
        platforms: [],
        genreIds: []
    })
    const handleInput = ({target}) => {
        setInitialForm({
            ...initialForm,
            [target.name]: target.value
        })

    }

    const handleGenres = ({target}) => {
        target.checked ? 
        setInitialForm({
            ...initialForm,
            genreIds: [...initialForm.genreIds, target.value]
        }) :
         setInitialForm({
                ...initialForm, genreIds: initialForm.genreIds.filter(g => target.value !== g)
            })

        }
    

    const handlePlatforms = ({target}) => {
        target.checked ? 
        setInitialForm({
            ...initialForm,
            platforms: [...initialForm.platforms, target.value]
        }) :
         setInitialForm({
            ...initialForm,
              platforms: initialForm.platforms.filter(p => target.value !== p)
            })

        }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createGame(initialForm))
        dispatch(loadingGames())
        setInitialForm({
            name: '',
            description: '',
            rating: '',
            released: '',
            platforms: [],
            genreIds: []
        })
    }
    

    return(
        <main className="gameCreation">
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name of your game</label>
            <input type="text" id="name" name="name" value={initialForm.name} onChange={handleInput}/>
            <label htmlFor="date">Release date</label>
            <input type="text" id="date" name="released" value={initialForm.released} onChange={handleInput}/>
            <label htmlFor="rating">Rating</label>
            <input type="number" id="rating" name="rating" value={initialForm.rating} onChange={handleInput} />
            <label htmlFor="description">Describe your game</label>
            <textarea value={initialForm.description} onChange={handleInput} name="description" id="description"></textarea>
            
            <p>Genres</p>
                {
                    genres && genres.map(g => (
                        <section key={g.id}>
                             <label htmlFor={g.name}>{g.name}</label>
                             <input type="checkbox" onChange={handleGenres} id={g.name} value={g.id} name="genres"/>
                        </section>
                       
                    ))
                }
            <p>Platforms</p>
                {
                    platforms && platforms.map(p => (
                        <section key={p}>
                             <label htmlFor={p}>{p}</label>
                             <input type="checkbox" onChange={handlePlatforms} id={p} value={p} name="platforms"/>
                        </section> ))
                }
            <button type="submit">Create Game</button>
        </form>
           <Link to={'/home'}>
           <button className='returnButton'>Home</button>
       </Link>
        </main>
        
      
    )
}