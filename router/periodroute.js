'use strict';

module.exports = function (app) {
    var controller = require('../controller/periodcontroller');

    app.route('/periods').get(controller.periods);
    app.route('/period').post(controller.insertPeriod);
    app.route('/period/:id').get(controller.getPeriodById);
    app.route('/period').put(controller.updatePeriod);
};