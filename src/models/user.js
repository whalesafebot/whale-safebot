const mongoose = require('mongoose');

// Definisikan schema untuk pengguna
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  wallet: { type: String, default: null },
  referrals: { type: [String], default: [] },
  balance: { type: Number, default: 0 },
});

// Buat model dari schema yang telah didefinisikan
const User = mongoose.model('User', userSchema);

module.exports = User;
