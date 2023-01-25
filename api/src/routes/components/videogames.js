const {Router} = require('express')
const { getVideogames } = require('../../controllers/getVideogames')

const router = Router()

router.get('/', getVideogames)

router.get('/:id')

router.post('/addGame')

module.exports = router