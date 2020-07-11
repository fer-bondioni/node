var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('resultados', {
      IsResultados: true
    });
  });

// router.get('/', (req, res, next) => {
//     res.render('resultados', {
//         layout: 'layout'
//     });
// });

// router.get('/', async function (req, res, next) {
//     var noticias
//     noticias = await searchmodel.buscarNoticias2(req.query.q);
//     res.render('resultados', {
//         noticias,
//         is_search: req.query.q != undefined,
//         q: req.query.q
//     });
// });