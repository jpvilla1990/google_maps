const argv = require('./config/yargs.js').argv;
const get = require('./modules/get.js');

//console.log(argv);





/*let result = get.getLugLatLon(argv.direccion)
    .then(resp => {
        console.log(resp.direccion);
        console.log(resp.lat);
        console.log(resp.lng);
    })
    .catch(e => console.log(e));*/


let clima = get.clima(argv.direccion)
    .then(resp => { console.log(`En la ciudad de ${resp.direccion} con latitud: ${resp.latitud} y longitud: ${resp.longitud} hay una temperatura promedio de ${resp.temperatura} con un maximo de ${resp.tempMax} y un minimo de ${resp.tempMin}`); })
    .catch(e => { return e });




//`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bad61c8098ff8739581a874fe9ebacbf`