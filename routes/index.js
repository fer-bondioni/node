var express = require('express');
var router = express.Router();
var noticiasModel = require('../models/noticiasModel');
// var searchmodel = require('../models/searchmodel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  var noticias = await noticiasModel.getNoticias();
  res.render('index', {
    IsHome: true,
    noticias
  });
});

// router.get('/', async function (req, res, next) {
//   var noticias
//   if (req.query.q === undefined) {
//     noticias = await noticiasModel.getNoticias();
//   } else {
//     noticias = await searchmodel.buscarNoticias2(req.query.q);
//   }
//   res.render('index', {
//     IsHome: true,
//     noticias,
//     is_search: req.query.q != undefined,
//     q: req.query.q
//   });
// });

module.exports = router;
