const mongoose = require("mongoose");
const schema = mongoose.Schema;

const partidosSchema = new schema({
  id_registro: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  gallos: [
    {
      type: schema.Types.ObjectId,
      ref: "Gallo"
    }
  ]
});

partidosSchema.statics.eliminar_gallo = async function(id_gallo, id_equipo) {
  try {
    let equipo = await this.findById(id_equipo);
    console.log(equipo);

    equipo.gallos = equipo.gallos.filter(i => i != id_gallo);
    await equipo.save();
    return Promise.resolve(this);
  } catch (error) {
    return Promise.reject(error);
  }
};

partidosSchema.statics.agregar_gallo = async function(id_gallo, id_equipo) {
  try {
    let equipo = await this.findById(id_equipo);
    console.log(equipo);

    equipo.gallos = [...equipo.gallos, id_gallo];
    await equipo.save();
    return Promise.resolve(this);
  } catch (error) {
    return Promise.reject(error);
  }
};

const partidos = mongoose.model("Partido", partidosSchema);

module.exports = partidos;
