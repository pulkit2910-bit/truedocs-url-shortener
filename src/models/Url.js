import mongoose from "mongoose";

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
    }
}, { timestamps : true });

const Url = mongoose.model('Url', UrlSchema);
  
export default Url;