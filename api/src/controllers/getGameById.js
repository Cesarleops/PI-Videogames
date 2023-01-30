const axios = require('axios')
const {Videogame, Genre} = require('../db')

const getGameById = async(req,res) => {
    const {id} = req.params
    try {
        if(id.includes('-')){
            const game = await Videogame.findByPk(id , {include: Genre})
            console.log('detalles del juego', game)
             return  res.json({
                _id: game.id,
                name: game.name,
                description : game.description,
                platforms: game.platforms,
                genres: game.genres,
                released: game.released,
                rating: game.rating
            })
        }
        const {data} = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${process.env.API_KEY}`)
        res.json(data)
        
    } catch (error) {
        console.log(error)
        res.json('todo mal')
    }
  
    
}

module.exports = {
    getGameById
}