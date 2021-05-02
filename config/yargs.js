const argv = require('yargs')
                  .options({
                    'b': {
                      alias: 'base',
                      type: 'number',
                      demandOption: true,
                      describe: 'Es la base de la tabla en consola'
                    },
                    'l': {
                      alias: 'lista',
                      type: 'boolean',
                      default: true,
                      describe: 'Muestra la tabla en consola'
                    },
                    'a': {
                      alias: 'hasta',
                      type: 'number',
                      default: 10,
                      describe: 'Nuemero de iteraciones'
                    }
                  })
                  .check((argv, options) => {
                    if (isNaN(argv.b)) {
                      throw 'La base debe ser un número';
                    }
                    return true;
                  })
                  .argv;

module.exports = argv;
