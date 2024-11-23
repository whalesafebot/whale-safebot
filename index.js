const { Telegraf } = require('telegraf');
const { connectDatabase } = require('./database/dbConnection');
const { getUser, createUser, getReferrals } = require('./userService');
require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN; // Pastikan BOT_TOKEN di file .env
const bot = new Telegraf(BOT_TOKEN);

// Koneksi ke database MongoDB
connectDatabase();

// Middleware untuk menyapa pengguna baru
bot.start(async (ctx) => {
  const userId = ctx.from.id;
  const username = ctx.from.username; // Ambil username pengguna

  let user = await getUser(userId);
  if (!user) {
    user = await createUser(userId, username);
    ctx.reply(`Selamat datang di Bot Sniper! Wallet Anda telah dibuat: \`${user.wallet}\``, { parse_mode: 'Markdown' });
  } else {
    ctx.reply('Selamat datang kembali!');
  }

  // Kirim link referral ke pengguna baru
  const referralLink = user.referralLink;
  ctx.reply(`Gunakan link referral ini untuk mengundang orang lain: ${referralLink}`);
  ctx.reply('Gunakan menu untuk mulai.');
});

// Menu utama
bot.command('menu', (ctx) => {
  ctx.reply('Pilih menu:', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Buy', callback_data: 'buy' },
          { text: 'Withdrawal', callback_data: 'withdrawal' },
        ],
        [
          { text: 'Referral', callback_data: 'referral' },
          { text: 'Start Sniper', callback_data: 'start_sniper' },
        ],
      ],
    },
  });
});

// Logika tombol callback
bot.on('callback_query', async (ctx) => {
  const action = ctx.callbackQuery.data;
  const userId = ctx.from.id;

  switch (action) {
    case 'referral':
      const referrals = await getReferrals(userId);
      ctx.reply(`Anda telah mengundang ${referrals.length} orang.`);
      break;
    default:
      ctx.reply('Perintah tidak dikenal.');
  }
});

// Jalankan bot
bot.launch();

// Tangani penghentian aplikasi
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
