const gallos = require("../model/gallo");

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
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("index", { titulo: "Hola", error });
  }
};

module.exports = {
  postEliminarGallo
};
