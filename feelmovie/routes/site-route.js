const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies.js');

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

      for (let i = 0; i < 5; i++) {
        selectedIndexes.push(Math.floor(Math.random() * movies.length))
      }
      const randomMovies= movies.filter((movie, index) =>
      selectedIndexes.includes(index)
      
      )

        console.log(randomMovies);
        
      res.json({message:{movies:randomMovies}})
    })
    .catch(next);
    
  })


router.get("/test", (req, res, next) => {
  res.json("Test");
});
