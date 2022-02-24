const db = require('../db')

function getVehicle(){
    return db('vehicles')
}


function addVehicle(payload){
    return db('vehicles').insert(payload)
}

function getVehicleByModel(year, make, model){
    return db('vehicles').where({year, make, model})
}

function findVehicle(payload){
    let [year, make, model] = payload.split(' ')

    make = make.toLowerCase()
    model = model.toLowerCase()

    return db('vehicles').where({year, make, model})
}

module.exports = {
    getVehicle,
    addVehicle,
    getVehicleByModel,
    findVehicle
}