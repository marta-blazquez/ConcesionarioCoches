var express = require('express');
var router = express.Router();

//localhost:3000/forty
router.get('/', function(req, res) {
    res.render('forty', { 
        title: 'Hola',
       
      });
  });

module.exports = router;
 