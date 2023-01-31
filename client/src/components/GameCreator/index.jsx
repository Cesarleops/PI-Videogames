import { Link } from "react-router-dom"
import { fetchGenres } from "../../store/thunks"
import './gameCreation.css'
import { useForm } from "../../hooks/useForm"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"


const formValidations = (form) => {
    let errors = {}
    let regexDate = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/
    if(!form.name.trim()){
        errors.name ='The name of the game is required'
    }
    if(!form.description.length > 0){
        errors.description = 'You must provide a description of your game'
    }
    if(!form.rating){
        errors.rating = 'Rating is required'
    } else if(!/^[1-5]$/.test(form.rating)){
        errors.rating = 'only ratings between 1 and 5 are valid'
    }
    if(!regexDate.test(form.released)){
        errors.released = 'You must provide a date in the format mm/dd/yyyy'
    }
    return errors

}

const initialForm = {
    name: '',
    description: '',
    rating: '',
    released: '',
    platforms: [],
    genreIds: []
}
export const CreateNewGame = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchGenres())
     }, [dispatch])
 
    const {form,errors, handleBlur,handleGenres, handlePlatforms, handleInput, handleSubmit} = useForm(initialForm,formValidations)
    
    const genres = useSelector(state => state.genres)
    const platforms = useSelector(state => state.platforms)
    console.log('errores',errors)
    return(
        <main className="mainCreation">
            <section className="gameCreation">
            <form onSubmit={handleSubmit} className="creationForm">
            <label htmlFor="name" className="formLabel">Name of your game</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleInput} className="basicInput" onBlur={handleBlur}/>
            {errors.name && <p className="errors">{errors.name}</p>}
            <label htmlFor="date" className="formLabel">Release date</label>
            <input type="text" id="date" name="released" value={form.released} onChange={handleInput} className="basicInput" onBlur={handleBlur} />
            {errors.released && <p className="errors">{errors.released}</p>}
            <label htmlFor="rating" className="formLabel">Rating</label>
            <input type="number" id="rating" name="rating" value={form.rating} onChange={handleInput} className="basicInput" onBlur={handleBlur}/>
            {errors.rating && <p className="errors">{errors.rating}</p>}
            <label htmlFor="description" className="formLabel">Describe your game</label>
            <textarea value={form.description} onChange={handleInput} name="description" id="description" onBlur={handleBlur}></textarea>
            {errors.description && <p className="errors">{errors.description}</p>}
            
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
                <button type="submit" className="creationButton" disabled={Object.keys(errors).length >0}> Create Game </button>
             </section>
            
        </form>
           <Link to={'/home'}>
                <button  className='returnButton'>Go Home</button>
           </Link>
        </section>
        
        </main>
    
      
    )
}