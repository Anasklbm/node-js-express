var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const values=[ "anas", "niyas","riyas"]     //creating array named values 

    const person={name:"Anas", comments:{comment:"this is a sample comment",date:"30-08-2021"}}

  res.render('about',{values});                 //res.render("hbs file",{arrayname})
  res.render('about',{person});
});

module.exports = router;
