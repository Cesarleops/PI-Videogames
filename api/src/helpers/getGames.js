const axios = require('axios')
const getGames = async() => {
    const videogames = []
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`)

    console.log(data.results)
    // // data.forEach(game => {
    // //     videogames.push({
    // //         id: game.,
    // //         name: game.name,
    // //         description:game.description,
    // //         released: game.released,
    // //         rating: game.rating,
    // //         platforms: game.platforms

    // //     })
    // })

}

module.exports = getGames