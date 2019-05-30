const gallo = require("../model/gallo");
const partidos = require("../model/partidos");
const uuid = require("uuid/v4");

const getAgregarGallo = async (req, res, next) => {
  try {
    let equipo = req.params.equipo;
    let nombre_equipo = await partidos.findById(equipo);

    res.render("agregarGallo", {
      titulo: "Agregar Gallo",
      equipo,
      nombre_equipo: nombre_equipo.nombre
    });
  } catch (error) {
    console.log(error);
    res.render("index", { titulo: "Equipos", error });
  }
};

const postAgregarGallo = async (req, res, next) => {
  try {
    let { nombre, anillo, peso, categoria, equipo } = req.body;
    console.log(nombre, anillo, categoria, equipo, peso);
    let nuevoGallo = await new gallo({
      nombre,
      anillo,
      equipo,
      peso,
      categoria
    }).save();
    await partidos.agregar_gallo(nuevoGallo._id, equipo);
    console.log(nuevoGallo);

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};
const getAgregarEquipo = (req, res, next) => {
  try {
    res.render("agregarPartido", {
      titulo: "Registrar equipo",
      id_registro: uuid()
    });
  } catch (error) {}
};

const postAgregarEquipo = async (req, res, next) => {
  try {
    let { nombre, id_registro } = req.body;
    console.log(nombre, id_registro);

    let nuevoEquipo = await new partidos({
      nombre,
      id_registro,
      gallos: []
    }).save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};
module.exports = {
  getAgregarGallo,
  postAgregarGallo,
  getAgregarEquipo,
  postAgregarEquipo
};
