var express = require('express');
var router = express.Router();

var routes_globals = require('./routes_globals');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render(
    'users',
    {
      title:          'Users Management',
      navbar_title:   routes_globals.navbar_title
    }
  );
});

module.exports = router;
