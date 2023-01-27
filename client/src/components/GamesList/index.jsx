import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchGames } from '../../store/thunks/thunks'
import { GameCard } from '../GameCard'
export const GameList = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
       dispatch(fetchGames())
    }, [])
    const games = useSelector(state => state.games)
    return(
        <main>
            <section>
                {
                    games.map(game => <GameCard 
                        name={game.name} 
                        id={game.id} 
                        genres={game.genres} i
                        image={game.background_image}/>)
                }
            </section>
        </main>
    )
}