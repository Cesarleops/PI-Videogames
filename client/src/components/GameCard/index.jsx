import { Link } from "react-router-dom"
import './gameCard.css'
export const GameCard = ({name,image, genres, id}) => {
    return(
        <div key={id}>
            <p>
             {name}
            </p>
           <img className="game-image" src={image} alt="background ilustration"/>
           <ul>
           {
            genres.map(g => (
                <li key={g.id}>{g.name}</li>
            ))
           }
           </ul>
           <Link to={`/game/${id}`}>
             <p>+</p>
           </Link>
           
        </div>
    )
}