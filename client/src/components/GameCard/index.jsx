
export const GameCard = ({name,image, genres, id}) => {

    return(
        <div key={id}>
            <p>
             {name}
            </p>
           <img src={image} alt="background ilustration"/>
           <ul>
           {
            genres.map(g => (
                <li key={g.id}>{g.name}</li>
            ))
           }
           </ul>
           
        </div>
    )
}