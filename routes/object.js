var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const person={name:"Anas", comments:{comment:"this is a sample comment",date:"30-08-2021"}}  //objectinu akath olla objectine call cheyyan

  res.render('object', {person});
});

module.exports = router;
