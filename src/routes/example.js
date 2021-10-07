const { Router } = require('express')

const router = Router()

/*
    Ejemplo de ruta 1: retorna hello world!
*/

router.get('/', (req, res) =>{
    return res.json('hello world!')
})

/* 
    Ejemplo de ruta 2: mandar un parametro y dar un saludo
*/

router.get('/:nombre', (req, res) => {
    return res.json(req.params.nombre)
})

module.exports = router