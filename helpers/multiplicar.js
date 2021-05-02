const fs = require('fs');
var colors = require('colors/safe');

const writtetabla = async(base, mostrar=true, hasta=10) => {
  let salida = '';
  //console.clear();
  salida += colors.blue('=======================\n');
  salida += colors.blue('=    TABLA DEL 5      =\n');
  salida += colors.blue('=======================\n');
  salida += colors.blue('-----------------------\n');
  for (let index = 1; index <= hasta; index++) {
    salida += `| ${base} ${colors.red('X')} ${index} = ${base * index} |\n`;
  }
  salida += '-----------------------';
  try {
    archivo = `tabla-${base}.txt`;
    await fs.writeFileSync(`./salida/${archivo}`, salida);
    if (mostrar) {
      console.log(salida);
    }
    return archivo;
  } catch (error) {
    throw 'El archivo no se creo correctamente, err: ' + error;
  }
}

module.exports = {
  writtetabla
}
