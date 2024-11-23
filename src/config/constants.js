require('dotenv').config(); // Memuat variabel dari file .env

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN, // Mengambil token bot dari file .env
  ADMIN_FEE_ADDRESS: process.env.ADMIN_FEE_ADDRESS, // Mengambil alamat wallet dari file .env
  TRANSACTION_FEE_PERCENT: process.env.TRANSACTION_FEE_PERCENT, // Mengambil fee transaksi dari file .env
  SL_PERCENTAGE: process.env.SL_PERCENTAGE, // Mengambil persentase Stop Loss dari file .env
  TP_PERCENTAGE: process.env.TP_PERCENTAGE, // Mengambil persentase Take Profit dari file .env
  MONGODB_URI: process.env.MONGODB_URI,
};
