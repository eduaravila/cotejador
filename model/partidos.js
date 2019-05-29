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

const partidos = mongoose.model("Partido", partidosSchema);

module.exports = partidos;
