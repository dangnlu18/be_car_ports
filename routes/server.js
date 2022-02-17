const express = require('express')
const vehicleRouter = require('../db/vehicles/vehicle-router')

const router = express.Router()

router.get('/', (req,res) =>{
    res.status(200).json({"text": "hello"})
})

router.use('/api/vehicles', vehicleRouter)

module.exports = router;