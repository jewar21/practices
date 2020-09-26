const express = require('express')
const Users = require('../models/Users')

const router = express.Router()

router.get('/', (req, res) => {
    Users.find()
    .exec()
    .then(x => res.status(200).send(x))
}) 

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    let max = 999999999, min = 1111111111
    var num = Math.random() * (max - min) + min
    num = parseInt(num)

    var json = new Object()
    
    json.name = req.body.name
    json.email = req.body.email
    json.password = req.body.password
    json.numero_cuenta = num
    json.monto = 1000000
    json.estado = true

    Users.create(json)
    .then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Users.findOneAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Users.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
})

module.exports = router