const crypto = require('crypto');

function generateWallet() {
  return crypto.randomBytes(16).toString('hex');
}

module.exports = { generateWallet };
