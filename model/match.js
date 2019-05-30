const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mathcSchema = new schema({
  retador: {
    type: schema.Types.ObjectId,
    ref: "Gallo"
  },
  retado: {
    type: schema.Types.ObjectId,
    ref: "Gallo"
  },
  libre: {
    type: Boolean
  }
});

const match = mongoose.model("Match", mathcSchema);

module.exports = match;
