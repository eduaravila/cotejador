const gallos = require("../model/gallo");
const partidos = require("../model/partidos");

const postEliminarGallo = async (req, res, next) => {
  try {
    let id = req.params.idGallo;
    console.log("Eliminar");
    console.log(id);
    console.log("====================================");
    let galloEliminado = await gallos.findByIdAndDelete(id);
    console.log("====================================");
    console.log(galloEliminado);
    console.log("====================================");
    await partidos.eliminar_gallo(id, galloEliminado.equipo);

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("index", { titulo: "Hola", error });
  }
};

const getEliminarPartido = async (req, res, next) => {
  try {
    let idPartido = req.params.idPartido;
    let partidoEleminado = await partidos.findByIdAndDelete(idPartido);
    console.log("eliminado", partidoEleminado);

    await gallos.eliminar_gallos(idPartido);
    res.redirect("/");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.redirect("/");
  }
};
module.exports = {
  postEliminarGallo,
  getEliminarPartido
};
