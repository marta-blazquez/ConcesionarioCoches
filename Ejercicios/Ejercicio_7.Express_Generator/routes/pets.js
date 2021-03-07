var express = require('express');
var router = express.Router();

//localhost:3000/pets/home
router.get('/home', function(req, res) {
  res.render('pets', { 
      title: 'Hola Ruben',
      cardUna: "Director",
      cardDos: "Becaria",
      cardTres: "Morgan"



    }); 
});

module.exports = router;