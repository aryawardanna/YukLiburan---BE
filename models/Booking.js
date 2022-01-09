import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookingSchema = new Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  itemId: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    night: {
      type: Number,
      required: true,
    },
  },
  memberId: {
    type: Schema.Types.ObjectId,
    ref: 'Member',
  },
  bankId: {
    type: Schema.Types.ObjectId,
    ref: 'Bank',
  },
  proofPayment: {
    type: String,
    required: true,
  },
  bankFrom: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
