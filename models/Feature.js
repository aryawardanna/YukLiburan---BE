import mongoose from 'mongoose';

const { Schema } = mongoose;

const featureSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feature', featureSchema);
