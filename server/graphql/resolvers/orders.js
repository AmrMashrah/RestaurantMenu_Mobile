const Order = require('../../models/order');

module.exports = {
  orders: async () => {
    try {
      const orders = await Order.find();
      return orders;
    } catch (err) {
      throw err;
    }
  },
  createOrder: async args => {
    try {
      const order = new Order({
        name: args.orderInput.name,
        email: args.orderInput.email,
        phoneNumber: args.orderInput.phoneNumber,
        cardInfo: args.orderInput.cardInfo,
        orderNumber: Math.floor(Math.random() * 900000) + 1000000,
        subtotal: args.orderInput.subtotal,
        tax: args.orderInput.tax,
        total: args.orderInput.total,
      });

      const result = await order.save();

      return result;
    } catch (err) {
      throw err;
    }
  },
};
