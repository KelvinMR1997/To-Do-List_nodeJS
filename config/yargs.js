const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea por hacer",
};
const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado o pendiente la tarea",
};
const argv = require("yargs")
  .command("crear", "Crea una nueva tarea", {
    descripcion,
  })
  .command("actualizar", "Actualiza una tarea previamente creada", {
    descripcion,
    completado,
  })
  .command("borrar", "Borra un registro de la BD", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion de la tarea por hacer",
    },
  })
  .help().argv;

//   Module.exports es igual a un objeto de funciones exportables
module.exports = {
  argv,
};
