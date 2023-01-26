const axios = require('axios')
const {Videogame, Genre} = require('../db')

const getGameById = async(req,res) => {
    const {id} = req.params
    try {
        if(id.includes('-')){
            const createdGame = await Videogame.findByPk(id , {include: Genre})
            return  res.json({
                msg: 'OK',
                createdGame
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