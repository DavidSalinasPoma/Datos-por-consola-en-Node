// Importando el paquete de yargs y configurando
const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla multiplicar',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola',
    },
    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Es el limite de la tabla multiplicar',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base tiene que ser un numero';
    }
    if (isNaN(argv.hasta)) {
      throw 'El limite tiene que ser un numero';
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
