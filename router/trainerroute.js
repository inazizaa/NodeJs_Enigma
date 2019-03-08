'use strict';

module.exports = function (app) {
    var controller = require('../controller/trainercontroller');

    app.route('/trainers').get(controller.trainers);
    app.route('/trainer').post(controller.insertTrainer);
    app.route('/trainer/:id').get(controller.getTrainerById);
    app.route('/trainer').put(controller.updateTrainer);
    // app.route('/trainee/:id').delete(controller.del);
};