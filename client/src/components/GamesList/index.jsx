import { useState} from 'react'
import { useSelector} from 'react-redux'
import './games.css'
import { GameCard } from '../GameCard'
import { Pagination } from '../Pagination'
export const GameList = () => {

    const games  = useSelector(state => state.games)
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage ]= useState(15)
    const lastGameIndex = currentPage * gamesPerPage
    const firstGameIndex = lastGameIndex - gamesPerPage
    const currentGames = games.slice(firstGameIndex, lastGameIndex)
    const pages = Math.ceil(games.length / gamesPerPage)
    const paginate = (page) => {
        setCurrentPage(page)
    }
    const prevPage = () => {
        if (currentPage !== 1) {
           setCurrentPage(currentPage - 1);
        }
     };
   
     const nextPage = () => {
        if (currentPage !== pages) {
           setCurrentPage(currentPage + 1);
        }
     };
    return(
        <main>
            <section className='games'>
                {
                   currentGames && currentGames.map(game => <GameCard 
                        name={game.name} 
                        id={game.id} 
                        key={game.id}
                        genres={game.genres}
                        image={game.background_image}/>)
                }
                
            </section>
            <p></p>
            <Pagination prevPage={prevPage} nextPage={nextPage} pages={pages}  paginate={paginate}/>
        </main>
    )
}