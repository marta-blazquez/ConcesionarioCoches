var express = require('express');
var router = express.Router();

//localhost:3000/travel
router.get('/', function(req, res) {
    res.render('travel', { 
        title: 'Hola',
       
      });
  });

module.exports = router;