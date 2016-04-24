var express = require('express');
var baby = require('../index.js');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	

	console.log("input:"+JSON.stringify(req.body));
	res.status(201).json({"ok":true});
});


module.exports = router;
 