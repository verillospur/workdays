var express = require('express');
var router = express.Router();

const routes_globals = require('./routes_globals');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    {
      title:          'Benjaweb', 
      navbar_title:   routes_globals.navbar_title
    }
  );
});

module.exports = router;
