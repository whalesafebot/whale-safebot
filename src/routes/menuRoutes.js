const { Markup } = require('telegraf');
const { handleBuy } = require('../controllers/buyController');
const { handleWithdrawal } = require('../controllers/withdrawalController');
const { handleReferral } = require('../controllers/referralController');
const { handleSniperStart } = require('../controllers/sniperController');

function registerMenuRoutes(bot) {
  bot.command('menu', (ctx) => {
    ctx.reply('Pilih menu:', Markup.inlineKeyboard([
      [Markup.button.callback('Buy', 'buy'), Markup.button.callback('Withdrawal', 'withdrawal')],
      [Markup.button.callback('Referral', 'referral'), Markup.button.callback('Start Sniper', 'start_sniper')],
    ]));
  });

  bot.action('start_sniper', (ctx) => handleSniperStart(ctx));
  bot.action('buy', (ctx) => handleBuy(ctx));
  bot.action('withdrawal', (ctx) => handleWithdrawal(ctx));
  bot.action('referral', (ctx) => handleReferral(ctx));
}

module.exports = { registerMenuRoutes };
