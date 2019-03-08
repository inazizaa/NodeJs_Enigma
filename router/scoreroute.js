'use strict';

module.exports = function (app) {
    var controller = require('../controller/scorecontroller');

    app.route('/scores').get(controller.scores);
    app.route('/score').post(controller.insertScore);
    app.route('/score/:id').get(controller.getScoreById);
    app.route('/score').put(controller.updateScore);
};