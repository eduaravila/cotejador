const mongoose = require("mongoose");
const schema = mongoose.Schema;

const galloSchema = new schema({
  anillo: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  equipo: {
    type: schema.Types.ObjectId,
    ref: "Partido"
  },
  peso: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    required: true
  }
});
galloSchema.statics.eliminar_gallos = async function(equipo_id) {
  try {
    await this.deleteMany({ equipo: equipo_id });
    return Promise.resolve(this);
  } catch (error) {
    return Promise.reject(error);
  }
};
const gallo = mongoose.model("Gallo", galloSchema);

module.exports = gallo;
