'use strict';

module.exports = function (app) {
    var controller = require('../controller/studymatcontroller');

    app.route('/studymaterials').get(controller.studymaterials);
    app.route('/studymaterial').post(controller.insertstudymaterial);
    app.route('/studymaterial/:id').get(controller.getstudymaterialById);
    app.route('/studymaterial').put(controller.updatestudymaterial);
};