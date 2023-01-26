const {Videogame} = require('../db')

const addVideogame = async(req,res) => {
    const {genreIds, name, description, released, rating, platforms} = req.body
    try {
        const newGame =  await Videogame.create({
            name,
            description,
            rating,
            released,
            platforms
        })
        await newGame.setGenres(genreIds)
        res.json({
            msg: 'OK',
            newGame
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'ERROR'
        })
    }

  
}

module.exports = {
    addVideogame
}