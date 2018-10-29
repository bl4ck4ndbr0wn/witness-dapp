const mongoose = require("mongoose");

const { Schema } = mongoose;

let Claim = null;

try {
  const ClaimSchema = new Schema({
    claim_id: String,
    claimant: String,
    claim: String,
    witnesses: [String],
    claimConfirmed: {
      type: Boolean,
      default: false
    }
  });
  Claim = mongoose.model("Claim", ClaimSchema);
} catch (e) {
  Claim = mongoose.model("Claim");
}

module.exports = Claim;
