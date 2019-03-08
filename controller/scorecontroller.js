var response = require('../model/res');
var scoreDao = require('../dao/scoredao');

exports.scores = function (req, res) {
    let whereClause = {};
    if (req.query.score_id) {
        whereClause.score_id = req.query.score_id;
    }
    if (req.query.traineeId) {
        whereClause.traineeId = req.query.traineeId;
    }
    if (req.query.materialId) {
        whereClause.materialId = req.query.materialId;
    }
    if (req.query.knowledge) {
        whereClause.knowledge = req.query.knowledge;
    }
    if (req.query.proactiveness) {
        whereClause.proactiveness = req.query.proactiveness;
    }
    if (req.query.task) {
        whereClause.task = req.query.task;
    }
    if (req.query.note) {
        whereClause.note = req.query.note;
    }
    if (req.query.active_flag) {
        whereClause.id = req.query.active_flag;
    }
    scoreDao.getAll(whereClause, function (error, rows) {
        if (error) {
            console.log('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.getScoreById = function (req, res) {
    scoreDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.insertScore = function (req, res) {
    scoreDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data success inserted' + data.insertId, res);
    });
};

exports.updateScore = function (req, res) {
    scoreDao.getById(req.body.id, function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.notfound('batch not found', res);
        } else {
            scoreDao.update(req.body.id, req.body, function (err, data) {
                if (err) {
                    console.log('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.id, res);
            });
        }
    });
};