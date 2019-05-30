const partidos = require("../model/partidos");
const gallos = require("../model/gallo");
const matchesModel = require("../model/match");

const postCorrerMatcheo = async (req, res, next) => {
  try {
    let gallosDB = await gallos.find({});
    let matches = [];
    gallosDB.map((gallo, indx) => {
      // * el gallo aun no es retado
      if (!matches.some(item => item.retado == gallo._id)) {
        matches[indx] = { retado: gallo._id, libre: true };
        gallosDB.map(galloRetador => {
          if (galloRetador._id != gallo._id) {
            if (galloRetador.equipo != gallo.equipo) {
              // ? el gallo retador no es retado anteriormente
              if (!matches.some(itemR => itemR.retado == galloRetador._id)) {
                if (
                  !matches.some(
                    itemR =>
                      !!itemR.retador && itemR.retador == galloRetador._id
                  )
                ) {
                  matches[indx] = {
                    ...matches[indx],
                    retador: galloRetador._id,
                    libre: false
                  };
                }
              }
            }
          }
        });
      }
    });
    await matchesModel.deleteMany({});
    await Promise.all(
      matches.map(async matchMap => {
        let guardado;
        if (matchMap.libre) {
          guardado = await new matchesModel({
            retado: matchMap.retado,
            libre: true
          }).save();
        } else {
          guardado = await new matchesModel({
            retador: matchMap.retador,
            retado: matchMap.retado,
            libre: false
          }).save();
        }
      })
    );
    let matcheoOficial = await matchesModel
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
    console.log("====================================");
    console.log(matcheoOficial);
    console.log("====================================");
    res.render("match", { titulo: "Peleas", matches: matcheoOficial });
  } catch (error) {}
};

module.exports = {
  postCorrerMatcheo
};
