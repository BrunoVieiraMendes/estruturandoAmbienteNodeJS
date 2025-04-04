const express = require('express');

const { Perfil } = require('../models');

const router = express.Router();

router.get('/', (_ , res) => {
    Perfil.find({}).then((Perfil) => {
        res.render('perfil/index',{
            nomeDoUsuario: "Bruno Mendes",
            perfil: Perfil,
      });
    });
});

module.exports = router;