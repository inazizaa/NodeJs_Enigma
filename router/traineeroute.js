'use strict';

module.exports = function (app) {
    var controller = require('../controller/traineecontroller');

    app.route('/trainees').get(controller.trainees);
    app.route('/trainee').post(controller.insertTrainee);
    app.route('/trainee/:id').get(controller.getTraineeById);
    app.route('/trainee').put(controller.updateTrainee);
    // app.route('/trainee/:id').delete(controller.del);
};