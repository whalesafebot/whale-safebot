const mongoose = require('mongoose');
const { MONGODB_URI } = require('../src/config/constants');

function connectDatabase() {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Koneksi ke database MongoDB berhasil.');
    })
    .catch((err) => {
      console.error('Koneksi ke database MongoDB gagal:', err.message);
    });
}

module.exports = { connectDatabase };

  