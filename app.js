const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    descripcion: {
        alias: 'd',
        desc: 'ingrese descripcion de la ciudad',
        demand: true
    }
}).argv;


console.log(argv.descripcion);

lugar.getLugarLatLng(argv.descripcion)
    .then(
        console.log
    )
    .catch(
        console.log
    )


const getInfo = async(direccion) => {
    try {
        const coordenada = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenada.lat, coordenada.lng);

        return `El clima de ${coordenada.direccion} es de ${temp}.`;

    } catch (e) {
        console.log(e);
        return `No se pudo obtener el clima de ${direccion}`
    }
}

getInfo(argv.descripcion)
    .then(
        console.log
    )
    .catch(
        console.log
    )