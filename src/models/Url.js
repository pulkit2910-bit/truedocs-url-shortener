const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    urlId: {
      type: String,
      required: true,
      unique: true
    },
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
    date: {
      type: String,
      default: Date.now,
    },
});

const Url = mongoose.model('Url', UrlSchema);
  
module.exports = Url;