const Claim = require("./witness.model");

/**
 * Get list of all posts confirmed by the blockchain
 * @returns {Claim[]}
 */
const listConfirmed = async (req, res) => {
  try {
    const confirmedClaims = await Claim.find({ claimConfirmed: true }).exec();
    res.send(confirmedClaims);
  } catch (err) {
    console.error(err);
  }
};

const listConfirmedById = async (req, res) => {
  try {
    const confirmedClaims = await Claim.findOne({
      claim_id: req.params.id
    }).exec();
    res.send(confirmedClaims);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { listConfirmed, listConfirmedById };
