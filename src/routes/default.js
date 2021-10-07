const { Router } = require('express')

const router = Router()

/*
    Ejemplo de ruta 1: retorna hello world!
*/

router.get('/', (req, res) =>{
    return res.json('ruta por defecto')
})

module.exports = router