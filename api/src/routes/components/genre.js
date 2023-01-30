
const {Router} = require('express')
const {getAllGenres} = require('../../controllers')
const router = Router()

router.get('/', getAllGenres)

module.exports = router