var express = require('express');
var router = express.Router();
var usuariosModel = require('./../models/usuariosModel');

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('admin/registro', {
        layout: 'admin/layout'
    });
});

router.post("/registro", async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;
        if (req.body.usuario !== "" && req.body.password !== "") {
            await usuariosModel.addUser(usuario, password);
            res.redirect('/admin/login')
        } else {
            res.render('admin/registro', {
                layout: 'admin/layout',
                error: true, mensaje: 'Todos los campos son requeridos'
            })
        }
    } catch{
        console.log(error)
        res.render('admin/registro', {
            layout: 'admin/layout',
            error: true, mensaje: 'No se cargó el usuario'
        })
    }//fin catch
})


//   router.post('/', async (req, res, next) => {
//     try {
//       var usuario = req.body.usuario;
//       var password = req.body.password;

//       var data = await usuariosModel.addUser(usuario, password);
//       if (data != undefined) {
//         req.session.id_usuario = data.id;
//         req.session.nombre = data.usuario;
//         res.redirect('/admin/login');
//       } else {
//         res.render('admin/registro', {
//           layout: 'admin/layout',
//           error: true
//         });
//       }//cierra el else
//     } catch (error) {
//       console.log(error);
//     }
//   });

module.exports = router;