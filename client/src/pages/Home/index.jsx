import { Link } from "react-router-dom"
import { GameList } from "../../components/GamesList"
import { SearchBar } from "../../components/SearchBar"
import './home.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchGameByName } from "../../store/thunks"

export const Home = () => {
    const [name,setName] = useState('')
    const dispatch = useDispatch()
    const handleOnChange = ({target}) =>{
        setName(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchGameByName(name))
        setName('')
    }
    return (
        <main className="home">
            <section className="navBar">
                <h1 className="appTitle">AllGames</h1>
                <div className="search_container">
                    <form className="searchForm" onSubmit={handleSubmit}>
                    <label htmlFor="search">Search a game</label>
                    <input type="text" id="search" className="search_input" onChange={handleOnChange} value={name}/>
                    <button className="searchButton" type="submit">Go!</button>
                    </form>
                </div>
                <Link to="/createGame">
                <button className="gameMakerButton">Create a new game</button>
                </Link>
            </section>
            <section className="cardList">
            <section className="filterBar">
                <SearchBar/>
            </section>
            <GameList/>
            </section>
    </main>
    )
    
   
}