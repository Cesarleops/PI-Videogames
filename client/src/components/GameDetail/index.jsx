import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchGameById } from "../../store/thunks"
import './gameDetail.css'

export const GameDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchGameById(id))
    },[id,dispatch])
   const {_id, name, description, genres, image, platforms, rating, released} = useSelector(state => state.gameDetail)
   console.log(name)
    return(
        <section className="gameDetail">
            <div className="gameInformation">
            <p>{name?.toUpperCase()}</p>
            <ul className="list">
           {
           genres && genres.map(g => (
                <li key={g.id} className="detailsList">{g.name}</li>
            ))
           }
           </ul>
           <p>Play on</p>
           <ul className="list">
            
           {

            typeof _id === 'string' ?  platforms && platforms.map(p => (
                <li key={p} className="detailsList">{p}</li>
            )): 
            platforms && platforms.map(p => (
                <li key={p.platform.id} className="detailsList">{p.platform.name}</li>
            ))
           }
           </ul>
           <p><span className="infoP">Released</span>  {released}</p>
           <p><span className="infoP">Score</span>  {rating}</p>
           <br/>
           <div className="description">
            <p>{description}</p>
           </div>
         

           <Link to={'/home'}>
                <button className='returnButton'>Go Home</button>
            </Link>
            </div>
      
            <div>
            {
                image ? <img src={image} alt="game ilustration" className="gameIlustration"/> :
                <div className="missingIlustration"><p>Add an ilustration of your game</p></div>
            }
            
            </div>
        </section>
    )
}