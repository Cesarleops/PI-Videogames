const axios = require('axios')
const {Genre} = require('../db')
const getGenres = async() => {
    const genres = []
    const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
     data.results.forEach(genre => {
        genres.push({
            name: genre.name
        })
    })
    await Genre.bulkCreate(genres)
    console.log('data added to db')
    

}

module.exports = getGenres