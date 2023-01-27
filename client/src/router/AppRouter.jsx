import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { Home } from "../pages/Home"
import { CreateNewGame } from "../components/GameCreator"
import { GameDetail } from "../components/GameDetail"

export const AppRouter = () => {

    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/createGame" element={<CreateNewGame/>}/>
            <Route path="/game/:id" element={<GameDetail/>}/>
        </Routes>
    )
}