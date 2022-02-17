const db = require('../db')

function getVehicle(){
    return db('vehicles')
}

module.exports = {
    getVehicle
}