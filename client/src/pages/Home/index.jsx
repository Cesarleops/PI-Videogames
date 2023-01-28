import { Link } from "react-router-dom"
import { GameList } from "../../components/GamesList"
import { SearchBar } from "../../components/SearchBar"
import { useEffect } from "react"
import { fetchGames} from '../../store/thunks'
import { useDispatch, useSelector  } from "react-redux"
import './home.css'
export const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchGames())
     }, [dispatch])
    const loader = useSelector(state => state.isLoading)
    console.log(loader)
    return (
        <main>
        <section className="home">
            <SearchBar/>
            <Link to="/createGame">
            <button>Make your own game</button>
            </Link>
            <GameList/>
        </section>
    </main>
    )
    
   
}