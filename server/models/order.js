const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  cardInfo: {
    type: Number,
  },
  orderNumber: {
    type: Number,
  },
  subtotal: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

module.exports = mongoose.model('Order', orderSchema);
