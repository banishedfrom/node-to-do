//const argv = require("yargs").argv;
const colors = require("colors");
const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case "listar":
    let listado = porHacer.getListado();
    console.log("============por hacer===============".green);
    for (let tarea of listado) {
      console.log(`${tarea.descripcion} /////completado = ${tarea.completado}`);
    }
    console.log("============================".green);

    break;

  case "actualizar":
    console.log("actualiza una tarea por hacer");
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    break;

  case "borrar":
    let borrado = porHacer.borrar(argv.descripcion);
    if (borrado) {
      console.log("se borro la tarea");
    } else {
      console.log("hubo un error");
    }
    break;

  default:
    console.log("comando no valido");
}
