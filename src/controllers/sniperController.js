const { SL_PERCENTAGE, TP_PERCENTAGE } = require('../config/constants');

function handleSniperStart(ctx) {
  ctx.reply(
    `Sniper dimulai dengan pengaturan:\n` +
    `Stop Loss: ${SL_PERCENTAGE}%\n` +
    `Take Profit: ${TP_PERCENTAGE}%`
  );
}

module.exports = { handleSniperStart };
