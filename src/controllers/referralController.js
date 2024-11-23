const { getUser } = require('../models/user');

function handleReferral(ctx) {
  const userId = ctx.from.id;
  const user = getUser(userId);
  const referralCount = user?.referrals.length || 0;

  ctx.reply(`Anda telah mengundang ${referralCount} orang.`);
}

module.exports = { handleReferral };
