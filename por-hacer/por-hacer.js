const fs = require('fs');
let listadoPorHAcer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHAcer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    })
}
const cargarDB = () => {
    try {
        listadoPorHAcer = require('../db/data.json');
    } catch (error) {
        listadoPorHAcer = [];
    }

}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHAcer.push(porHacer);
    guardarDB();
    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHAcer;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHAcer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });
    if (index >= 0) {
        listadoPorHAcer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return fale;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let nueevoListado = listadoPorHAcer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHAcer.length == nueevoListado.length) {
        return false;
    } else {
        listadoPorHAcer = nueevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}