var pdf = require("html-pdf");
const matcheos = require("../model/match");
const boletosGenerador = require("../utils/boletos");

const getBoletos = async (req, res, next) => {
  try {
    var options = { format: "Letter" };

    let boletosHTML = boletosGenerador.header();
    let matcheoOficial = await matcheos
      .find()
      .populate("retado")
      .populate("retador")
      .populate({
        path: "retado",
        populate: {
          path: "equipo",
          model: "Partido"
        }
      })
      .populate({
        path: "retador",
        populate: {
          path: "equipo",
          model: "Partido"
        }
      });
    matcheoOficial.map(item => {
      let retado = item.retado;
      let retador = item.retador ? item.retador.nombre : "";
      boletosHTML =
        boletosHTML + boletosGenerador.boleto(retado.nombre, retador);
    });
    boletosHTML = boletosHTML + boletosGenerador.footer();
    res.setHeader("Content-disposition", "attachment; filename=boletos.pdf");

    res.setHeader("content-type", "application/pdf");
    pdf.create(boletosHTML, options).toStream(function(err, stream) {
      if (err) return console.log(err);
      stream.pipe(res);
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getBoletos
};
