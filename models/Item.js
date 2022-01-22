const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      default: 'Indonesia',
    },
    city: {
      type: String,
      required: true,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      default: 'night',
    },
    sumBooking: {
      type: Number,
      default: 0,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    imageId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Image',
      },
    ],
    featureId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Feature',
      },
    ],
    activityId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
