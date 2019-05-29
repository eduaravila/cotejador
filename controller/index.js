const partidos = require("../model/partidos");

const getIndex = async (req, res, next) => {
  try {
    let partidosDb = await partidos.find({}).populate("gallos");
    console.log("====================================");
    console.log(partidosDb[0].gallos);
    console.log("====================================");
    res.render("index", {
      titulo: "Hola",
      resultados: partidosDb,
      error: false
    });
  } catch (error) {
    console.log(error);

    res.render("index", { titulo: "Hola", error });
  }
};

module.exports = {
  getIndex
};
