'use strict';

module.exports = function (app) {
    var controller = require('../controller/studypercontroller');

    app.route('/studypers').get(controller.studypers);
    app.route('/studyper').post(controller.insertstudyper);
    app.route('/studyper/:id').get(controller.getstudyperById);
    app.route('/studyper').put(controller.updatestudyper);
};