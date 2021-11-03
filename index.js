const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))
 
app.get('/', function (req, res) {
  res.sendFile(path.join(_dirname,'/public/index.html'))
})

app.get('/:nome', function (req, res) {
  res.send(`Olá ${req.params.nome}`)
})


app.listen(3000)