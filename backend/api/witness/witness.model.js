const mongoose = require("mongoose");

const { Schema } = mongoose;

let Witness = null;

try {
  const WitnessSchema = new Schema({
    _id: {
      timestamp: Number,
      author: String
    },
    author: String,
    claim: String,
    Witness: String,
    witnessConfirmed: {
      type: Boolean,
      default: false
    }
  });
  Witness = mongoose.model("Witness", WitnessSchema);
} catch (e) {
  Witness = mongoose.model("Witness");
}

module.exports = Witness;
