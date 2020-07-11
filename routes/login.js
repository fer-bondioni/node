var express = require('express');
var router = express.Router();
var usuariosModel = require('./../models/usuariosModel');

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

// logout
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
})

//envios de datos user y pass
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/noticias');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }//cierra el else
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;