const ordersResolver = require('./orders');

const rootResolver = {
  ...ordersResolver,
};

module.exports = rootResolver;
