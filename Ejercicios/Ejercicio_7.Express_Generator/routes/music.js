var express = require('express');
var router = express.Router();

//localhost:3000/music
router.get('/', function(req, res) {
  res.render('music', { 
      //title: 'Hola',
     
    });
});

module.exports = router; 