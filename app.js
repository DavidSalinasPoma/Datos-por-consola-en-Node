// Importando pauetes o modulos
const { Multiplicar } = require('./helpers/Multiplicar');

const { argv } = require('./config/yargs');

// Tarea Controlar desde la terminal si va a listar la tabla de multiplicar
// option('l')
// Listar
// boolean
// defauld:false
// app -b 8 -l (Va a listar)
// app -b 8 (no va a listar)

class App {
  constructor() {
    // Recibiendo datos del la terminal
    console.log(argv);

    this.multiplicar = new Multiplicar(argv.base, argv.listar, argv.hasta);
  }
  imprimirTabla() {
    this.multiplicar
      .crearArchivo()
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }
}

const app = new App();
app.imprimirTabla();
