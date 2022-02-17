const express = require('express')

const cars = require('./vehicle-model')

const router = express.Router()

router.get('/', async(req,res,next) =>{
    try{
        const car = await cars.getVehicle()
        res.json(car)
    }
    catch(err){
        next(err)
    }
})


module.exports = router