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

const gallo = mongoose.model("Gallo", galloSchema);

module.exports = gallo;
