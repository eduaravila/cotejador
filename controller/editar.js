const gallos = require("../model/gallo");

const getEditarGallo = async (req, res, next) => {
  try {
    let id = req.params.idGallo;
    let editarGallo = await gallos.findById(id);
    let { nombre, anillo, peso, categoria, _id: id_gallo } = editarGallo;
    console.log("====================================");
    console.log(editarGallo);
    console.log("====================================");
    res.render("editarGallo", {
      titulo: `Editar ${nombre}`,
      nombre,
      anillo,
      peso,
      categoria,
      id_gallo
    });
  } catch {
    res.redirect("/");
  }
};

const postEditarGallo = async (req, res, next) => {
  try {
    let { nombre, anillo, peso, categoria, id_gallo } = req.body;
    let editarGallo = await gallos.findByIdAndUpdate(id_gallo, {
      nombre,
      anillo,
      peso,
      categoria
    });
    console.log("====================================");
    console.log(editarGallo);
    console.log("====================================");
    res.redirect("/");
  } catch {
    res.redirect("/");
  }
};

module.exports = {
  getEditarGallo,
  postEditarGallo
};
