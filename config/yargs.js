const descripcion = {
  demand: true,
  alias: "d",
  desc: "descripcion de la tarea por hacer",
};

const argv = require("yargs")
  .command("crear", "crear un elemento por hacer", { descripcion })
  .command("listar", "lista todas las tareas", {})
  .command("borrar", "borra una tarea", { descripcion })
  .command("actualizar", "actualiza el estado de la tarea  ", {
    descripcion,

    completado: {
      default: true,
      alias: "c",
      desc: "marca como completado o pendiente la tarea ",
    },
  })
  .help().argv;

module.exports = {
  argv,
};
