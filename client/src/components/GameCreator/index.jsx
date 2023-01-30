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
     }, [dispatch])
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
        <main className="mainCreation">
            <section className="gameCreation">
            <form onSubmit={handleSubmit} className="creationForm">
            <label htmlFor="name" className="formLabel">Name of your game</label>
            <input type="text" id="name" name="name" value={initialForm.name} onChange={handleInput} className="basicInput"/>
            <label htmlFor="date" className="formLabel">Release date</label>
            <input type="text" id="date" name="released" value={initialForm.released} onChange={handleInput} className="basicInput"/>
            <label htmlFor="rating" className="formLabel">Rating</label>
            <input type="number" id="rating" name="rating" value={initialForm.rating} onChange={handleInput} className="basicInput"/>
            <label htmlFor="description" className="formLabel">Describe your game</label>
            <textarea value={initialForm.description} onChange={handleInput} name="description" id="description"></textarea>
            
            <p className="checkboxes_title">Genres</p>
                <section className="checkboxes">
                {
                    genres && genres.map(g => (
                        <section className="genresCheck" key={g.id}>
                             <label htmlFor={g.name}>{g.name}</label>
                             <input type="checkbox" onChange={handleGenres} id={g.name} value={g.id} name="genres"/>
                        </section>
                       
                    ))
                }
                </section>
               
            <p className="checkboxes_title">Platforms</p>
             <section className="checkboxes">
             {
                    platforms && platforms.map(p => (
                        <section className="platformsCheck" key={p}>
                             <label htmlFor={p}>{p}</label>
                             <input type="checkbox" onChange={handlePlatforms} id={p} value={p} name="platforms"/>
                        </section> ))
                }
             </section>
             <section className="buttonSection">
                <button type="submit" className="creationButton">Create Game</button>
             </section>
            
        </form>
           <Link to={'/home'}>
                <button className='returnButton'>Go Home</button>
           </Link>
        </section>
        
        </main>
    
      
    )
}