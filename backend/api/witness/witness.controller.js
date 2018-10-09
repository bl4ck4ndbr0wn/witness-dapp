const Witness = require("./witness.model");

/**
 * Get list of all witness confirmed by the blockchain
 * @returns {Witness[]}
 */
const listConfirmed = async (req, res) => {
  try {
    const confirmedWitnesses = await Witness.find({
      witnessConfirmed: true
    }).exec();
    res.send(confirmedWitnesses);
  } catch (err) {
    console.error(err);
  }
};

module.exports = listConfirmed;
