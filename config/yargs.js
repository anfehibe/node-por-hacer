const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
};
const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('crear', 'Crea un elemento por hacer', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}