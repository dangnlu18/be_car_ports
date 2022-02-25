const express = require('express')
const {urlencoded } = require('body-parser')




const vehicles = require('./vehicle-model')

const router = express.Router()
router.use(urlencoded({extended: true}))

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

router.post('/findVehicle', async(req,res,next)=>{

    console.log('this is line 42: ', req.body)
    try{
        const payload = req.body
        

        console.log(payload)
        const [findVehicle] = await vehicles.findVehicle(payload)
        console.log(findVehicle)
        if (findVehicle === undefined){
        
            res.status(403).json({message: 'car not found'})
        } else{
            res.status(200).json({car: findVehicle})
        }

    }
    catch(err){
        next(err)
    }
})


module.exports = router