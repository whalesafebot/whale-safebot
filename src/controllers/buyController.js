const { calculateFee } = require('../utils/feeCalculator');
const { ADMIN_FEE_ADDRESS } = require('../config/constants');
const { getUser } = require('../models/user');

function handleBuy(ctx) {
  const userId = ctx.from.id;
  const userMessage = ctx.message.text;

  if (!isNaN(userMessage)) {
    const amount = parseFloat(userMessage);
    const fee = calculateFee(amount);

    ctx.reply(
      `Pembelian sebesar ${amount} berhasil.\n` +
      `Fee: ${fee}\n` +
      `Net: ${amount - fee}\n` +
      `Alamat fee: ${ADMIN_FEE_ADDRESS}`
    );

    const user = getUser(userId);
    if (user) user.balance += amount - fee;
  } else {
    ctx.reply('Masukkan angka yang valid.');
  }
}

module.exports = { handleBuy };
