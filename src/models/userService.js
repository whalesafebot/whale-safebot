const User = require('./models/User');
const crypto = require('crypto');

// Fungsi untuk mendapatkan data pengguna berdasarkan userId
async function getUser(userId) {
  try {
    const user = await User.findOne({ userId });
    return user;
  } catch (err) {
    console.error('Gagal mendapatkan pengguna', err);
    return null;
  }
}

// Fungsi untuk membuat pengguna baru jika belum ada
async function createUser(userId, username) {
  try {
    let user = await User.findOne({ userId });
    if (!user) {
      user = new User({
        userId: userId,
        wallet: null,
        referrals: [],
        balance: 0,
        username: username,
        referralLink: generateReferralLink(username),
      });
      await user.save();
    }
    return user;
  } catch (err) {
    console.error('Gagal membuat pengguna baru', err);
    return null;
  }
}

// Fungsi untuk menghasilkan referral link berdasarkan username
function generateReferralLink(username) {
  const baseUrl = 'https://t.me/whalesafebot?start='; // Ganti dengan username bot Anda
  return baseUrl + encodeURIComponent(username);
}

// Fungsi untuk mendapatkan semua referral berdasarkan userId
async function getReferrals(userId) {
  try {
    const user = await User.findOne({ userId });
    return user ? user.referrals : [];
  } catch (err) {
    console.error('Gagal mendapatkan referral', err);
    return [];
  }
}

module.exports = { getUser, createUser, getReferrals };
