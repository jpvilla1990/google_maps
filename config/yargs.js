opts = {
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}



const argv = require('yargs').options(opts).help().argv;

module.exports = {
    argv
}