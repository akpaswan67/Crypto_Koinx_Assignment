
const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema(
  {
    coin: {
      type: String,
      enum: ['bitcoin', 'matic-network', 'ethereum'], 
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    marketCap: {
      type: Number,
      required: true,
    },
    change24h: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, 
  }
);

const CryptoData = mongoose.model('CryptoData', cryptoDataSchema);

module.exports = CryptoData;