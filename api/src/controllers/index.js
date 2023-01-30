
const {addVideogame} = require('./addVideogame')
const {getGameById} = require('./getGameById')
const {getVideogames} = require('./getVideogames')
const {getAllGenres} = require('./getAllGenres')

module.exports = {
    getGameById,
    getVideogames,
    addVideogame,
    getAllGenres
}