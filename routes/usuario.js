const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const  Usuario = require('../models/usuario');
app.get('/usuario', function (req, res) {
    res.json('get usuario')
});

app.post('/usuario', function (req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioBD) =>{
        if (err){
            res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            usuario: usuarioBD
        });
    });

});

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;

    res.json({
        id,
        "nombre": "Fabio"

    })
});

app.delete('/usuario', function (req, res) {
    res.json('get delete')
});


module.exports = app;