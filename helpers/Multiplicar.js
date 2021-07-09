// Importando pauetes o modulos
const fs = require('fs'); // Aqui esta todo lo que se necesita para grabar en un archivo
const colors = require('colors');

// Ahora con EMC6
// import fs from 'fs';

class Multiplicar {
  constructor(base, listar, hasta) {
    this.base = base;
    this.listar = listar;
    this.hasta = hasta;
  }

  // Metodo crear archivo
  crearArchivo() {
    // Primer ejercico en nodeJS tabla de multiplicar del 5
    // Limpiar la consola automaticamente
    console.clear();

    // Sistema de consolas
    console.log('======================'.green);
    console.log(` ${'Tabla del'.green}  ${colors.yellow(this.base)}`);
    console.log('======================'.green);

    let contador = 1;

    // Imprimiendo en un archivo con fileSystem
    let salida,
      consola = '';

    while (contador <= this.hasta) {
      // Concatenacion de cadenas con salto de linea
      consola += `${this.base} ${'*'.green} ${contador} ${'='.green} ${
        this.base * contador
      }\n`;
      salida += `${this.base} * ${contador} = ${this.base * contador}\n`;
      contador++;
    }

    if (this.listar) {
      console.log(consola);
    }

    // Grabar en un archivo de texto la tabla del 5 con el paquete o Mudulo
    // de node llamado filesystem
    return new Promise((resolve, reject) => {
      try {
        fs.writeFileSync(`Tabla-${this.base}.txt`, salida);
        resolve(`Tabla-${this.base}.txt creado`);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = {
  Multiplicar,
};
