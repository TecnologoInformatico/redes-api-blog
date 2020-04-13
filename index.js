const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const fs = require('fs');

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
        let data = {
            titulo: 'TISJ | Inicio'
        }
        res.render('pages/index', data)
    })
    .get('/api/usuarios', (req, res) => {
        
        let usuarios;
        let usuariosDb = path.join(__dirname, 'data', 'usuarios.json')
        // console.log(usuariosDb)
        fs.readFile(usuariosDb, 'utf8', (err, data) => {
          if (err) {
            throw err
          }
          usuarios = JSON.parse(data)
          res.send(usuarios)
        })
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))