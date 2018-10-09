const claim = require("./claim");

const account = process.env.EOSIO_CONTRACT_ACCOUNT;

module.exports = [
  {
    actionType: `${account}::claim`, //account::action name
    updater: claim
  }
];
