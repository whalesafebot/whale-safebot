const { TRANSACTION_FEE_PERCENT } = require('../config/constants');

function calculateFee(amount) {
  return (amount * TRANSACTION_FEE_PERCENT) / 100;
}

module.exports = { calculateFee };
