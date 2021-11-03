const express = require('express')
const app = express()
const path = require('path')
 
app.get('/', function (req, res) {
  res.send('Bom dia Miguel!')
})

app.get('/:nome', function (req, res) {
  res.send(`Olá ${req.params.nome}`)
})


app.listen(3000)