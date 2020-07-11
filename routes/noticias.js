var express = require('express');
var router = express.Router();
var noticiasModel = require('../models/noticiasModel')

/* GET noticias page. */
router.get('/', async function(req, res, next) {
  var noticias = await noticiasModel.getNoticias2();
  res.render('noticias', {
    IsNoticias: true,
    noticias
  });
});

// código extra

// router.get('/categorias', (req, res, next) => {
//   res.render('categorias', {
//     layout: 'layout'
//   });
// });

// router.get('/categorias', async function (req, res, next) {
//   var noticias = await noticiasModel.getNoticias2();
//   res.render('categorias', {
//     IsNoticias: true,
//     noticias
//   });
// });



// router.post("/agregar", async (req, res, next) => {
//   try {
//     if (req.body.titulo !== "" && req.body.categoria !== "" && req.body.fecha !== "" && req.body.contenido) {
//       await noticiasModel.insertNoticia(req.body);
//       res.redirect('/admin/noticias')
//     } else {
//       res.render('admin/agregar', {
//         layout: 'admin/layout',
//         error: true, mensaje: 'Todos los campos son requeridos'
//       })
//     }
//   } catch{
//     console.log(error)
//     res.render('admin/agregar', {
//       layout: 'admin/layout',
//       error: true, mensaje: 'No se cargó la noticia'
//     })
//   }//fin catch
// })


module.exports = router;