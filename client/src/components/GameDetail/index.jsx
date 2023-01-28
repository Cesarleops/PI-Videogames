import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchGameById } from "../../store/thunks"


export const GameDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchGameById(id))
    },[id])
   const {name, description, genres, image, platforms, rating, released} = useSelector(state => state.gameDetail)
    return(
        <div>
            <img src={image} alt="game ilustration"/>
            <h3>{name}</h3>
            <p>{description}</p>
            <ul>
           {
           genres && genres.map(g => (
                <li key={g.id}>{g.name}</li>
            ))
           }
           </ul>
           <ul>
           {
            platforms && platforms.map(p => (
                <li key={p.platform.id}>{p.platform.name}</li>
            ))
           }
           </ul>
           <p>{released}</p>
           <p>{rating}</p>

           <Link to={'/home'}>
                <button className='returnButton'>Home</button>
            </Link>
           
            
        </div>
    )
}