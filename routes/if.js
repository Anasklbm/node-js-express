var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const person={name:"Anas", admin:true}   //admin true  ahnen set cheythu

  res.render('if', {person});
});

module.exports = router;
