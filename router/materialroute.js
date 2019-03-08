'use strict';

module.exports = function (app) {
    var controller = require('../controller/materialcontroller');

    app.route('/materials').get(controller.materials);
    app.route('/material').post(controller.insertmaterial);
    app.route('/material/:id').get(controller.getmaterialById);
    app.route('/material').put(controller.updatematerial);
};