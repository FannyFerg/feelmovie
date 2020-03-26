const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({message:'welcome sur la homepage'});
});



router.get("/home", (req, res, next) => {
  res.json({message:'welcome sur ton profil'});
});






router.get('/movies', (req, res, next) => {
  const mood = req.query.mood; // sad

  const filters = {
    heartbroken: {Genre: { $nin: ["Romance"] }},
    sad: {Genre: { $nin: ["Drama"] } },
    happy: {}
  } 


  Movie.find(filters[mood])
    .then(movies => {
      let selectedIndexes = [];

      for (let i = 0; i < 6; i++) {
        selectedIndexes.push(Math.floor(Math.random() * movies.length))
      }
      const randomMovies= movies.filter((movie, index) =>
      selectedIndexes.includes(index)
      
      )

  
        
      res.json(randomMovies)
    })
    .catch(next);
    
  })

  router.get('/movies/:id', (req, res, next) => {
    const id = req.params.id;
  
    Movie.findById(id)
      .then(movie => {
        
        res.json(movie); //  des données a cette object 
      })
      .catch(next)
  })

router.get("/test", (req, res, next) => {
  res.json("Test");
});

router.get('/search', (req, res, next) => {
 
  Movie.find()
      .then(movie => {
        
        res.json(movie); //  des données a cette object 
      })
      .catch(next)
  
})

module.exports = router