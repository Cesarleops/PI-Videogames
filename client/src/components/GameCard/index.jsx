import { Link } from "react-router-dom"
import './gameCard.css'
export const GameCard = ({name,image, genres, id}) => {
    return(
        <div className="gameCard" key={id}>
            {
                typeof id === 'string' ? <div className="missingCardIlustration"><p>Add an image</p></div> :
                <img className="game_image" src={image} alt="background ilustration"/>
            }
           
        <div className="gameInfo">
            <h3 className="gameName">{name}</h3>
            <ul className="genres_list">
            
            {
                genres.map(g => (
                    <li key={g.id}>{g.name}</li>
                ))
            }
            </ul>
            <Link to={`/game/${id}`}>
                <p className="plusInfo">More info</p>
            </Link>
        </div>
    
           
        </div>
    )
}