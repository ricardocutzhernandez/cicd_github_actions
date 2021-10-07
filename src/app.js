const express = require('express')

const app = express()

app.use(express.json())

app.use('/', require('./routes/default'))
app.use('/example', require('./routes/example'))

app.listen(8080)

console.log('Ejemplo escuchando en puerto 8080')

module.exports = app