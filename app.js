const express = require('express');
const cors = require('cors');
const app = express();

// Configuración
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(express.json())

// Rutas
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// ruta para nuestra api de usuarios
app.use('/api/usuarios', require('./routes/usuario'))

module.exports = app