const axios = require('axios')
const {Videogame} = require('../db')

const getVideogames = async(req,res) => {
    const {name} = req.query
    const gameName = name.split(' ').join('-').toLowerCase()
    const createdGames = await Videogame.findAll()
    if(name){
    try {
            
            const {data} = await axios.get(`https://api.rawg.io/api/games?search=${gameName}&key=${process.env.API_KEY}`)
            const matchingCreatedGames = createdGames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            const AllGames = [...matchingCreatedGames,...data.results].slice(0,15)
            if(AllGames.length === 0) res.send('this videogame does not exist')
            res.json({
                msg: 'todo ok',
                AllGames
                
            }
            )
        
    } catch (error) {
        console.log(error)
       return res.json('todo mal')
    }
    } else {
        try {
            const firstPage =  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=1&page_size=40`);
            const secondPage = axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=2&page_size=40`)
            const thirdPage =  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=3`)
            let AllPages = null
             await Promise.all([firstPage,secondPage,thirdPage]).then((responses)=> {
                AllPages = [...responses[0].data.results, ...responses[1].data.results, ...responses[2].data.results]
             })
             AllPages = [...createdGames, ...AllPages]
            res.json({
                msg: 'todo ok',
                AllPages
            })
        } catch (error) {
            console.log(error)
            res.json('todo mal')
        }
      
        
    }


}

module.exports = {
    getVideogames
}


