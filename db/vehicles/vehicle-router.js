const express = require('express')

const vehicles = require('./vehicle-model')

const router = express.Router()

router.get('/', async(req,res,next) =>{
    try{
        const car = await vehicles.getVehicle()
        res.json(car)
    }
    catch(err){
        next(err)
    }
})


router.post('/', async(req,res,next)=>{
    try{
        const payload = req.body
        const newCar = await vehicles.addVehicle(payload)
        res.status(201).json({message: "successfully added"})
    }
    catch(err){
        next(err)
    }
})

router.get('/:year/:make/:model', async(req,res,next) =>{
    try{
        const {year, make, model} = req.params
        const [car] = await vehicles.getVehicleByModel(year, make, model)
        res.json(car)
    }
    catch(err){
        next(err)
    }
})

router.get('/:findVehicle', async(req,res,next)=>{
    try{
        const payload = req.query.body
        console.log(payload)
        const [findVehicle] = await vehicles.findVehicle(payload)
        console.log(findVehicle)
        if (findVehicle === 'undefined'){
            res.status(404)
        }
        res.status(200).json({car: findVehicle})
    }
    catch(err){
        next(err)
    }
})


module.exports = router