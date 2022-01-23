const mongoose = require('mongoose');

const { Schema } = mongoose;

const bankSchema = new Schema({
  nameBank: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model('Bank', bankSchema);
