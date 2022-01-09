const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    itemId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
