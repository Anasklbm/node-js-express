var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const values=[ "anas", "niyas","riyas"]     //creating array named values 
  res.render('about',{values});                 //res.render("hbs file",{arrayname})
});

module.exports = router;
