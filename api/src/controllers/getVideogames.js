const axios = require('axios')
const {Videogame, Genre} = require('../db')

const getVideogames = async(req,res) => {
    const {name} = req.query
    const createdGames = await Videogame.findAll({include: Genre})
    console.log('juegos creado', createdGames)
    if(name){
        console.log(name)
    try {
            
            const {data} = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${process.env.API_KEY}`)
            const matchingCreatedGames = createdGames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            const AllGames = [...matchingCreatedGames,...data.results].slice(0,15)
            if(AllGames.length === 0) res.send('this videogame does not exist')
            console.log(AllGames.length)
            console.log('juegos que coinciden',AllGames)
            res.json(AllGames)
        
    } catch (error) {
        console.log(error)
       return res.json('todo mal')
    }
    } else {
        try {
            const firstPage = axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=1`);
            const secondPage= axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=2`)
            const thirdPage = axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=3`)
            const fourthPage= axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=4`)
            const fifthPage = axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=5`)
            let AllPages = null
             await Promise.all([firstPage,secondPage,thirdPage,fourthPage,fifthPage]).then((responses)=> {
                AllPages = [
                 ...responses[0].data.results,
                 ...responses[1].data.results,
                 ...responses[2].data.results,
                 ...responses[3].data.results,
                 ...responses[4].data.results
                ]
             })
             AllPages = [...createdGames, ...AllPages]
            res.json({
                msg: 'todo ok',
                AllPages
            })
        } catch (error) {
            console.log(error)
            res.json('todo mal')
        }
      
        
    }


}

module.exports = {
    getVideogames
}


