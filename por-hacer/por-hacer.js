const fs = require("fs");
const { throws } = require("assert");

let listadoPorHacer = [];

let guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw new Error("no se pudo grabar", err);
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const getListado = () => {
  cargarDB();
  console.log(listadoPorHacer);
  return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();
  let index = listadoPorHacer.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    listadoPorHacer.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};
