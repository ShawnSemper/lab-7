'use strict';

const orderRoute = require('./../routes/order-route');

module.exports = (app) => {
    orderRoute(app);
};