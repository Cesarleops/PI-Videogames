const {Router} = require('express')
const {getGameById, getVideogames, addVideogame} = require('../../controllers/index')

const router = Router()

router.get('/', getVideogames)

router.get('/:id', getGameById)

router.post('/addGame', addVideogame)

module.exports = router