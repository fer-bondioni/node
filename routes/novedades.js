var express = require('express');
var router = express.Router();

/* GET novedades page. */
router.get('/', function(req, res, next) {
  res.render('novedades', {
    IsNovedades: true
  });
});

module.exports = router;
