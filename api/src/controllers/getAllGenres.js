const {Genre} = require('../db')

const getAllGenres = async(req,res) => {
   try {
     const genres = await Genre.findAll()
    res.json(genres)
   } catch (error) {
    console.log(error)
    res.json('Something went wrong')
   }
    
    
}

module.exports = {
    getAllGenres
}