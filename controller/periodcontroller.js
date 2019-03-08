var response = require('../model/res');
var periodDao = require('../dao/perioddao');

exports.periods = function (req, res) {
    let whereClause = {};
    if (req.query.id) {
        whereClause.id = req.query.id;
    }
    if (req.query.batchId) {
        whereClause.batchId = req.query.batchId;
    }
    if (req.query.weekId) {
        whereClause.weekId = req.query.weekId;
    }
    if (req.query.description) {
        whereClause.description = req.query.description;
    }
    if (req.query.active_flag) {
        whereClause.id = req.query.active_flag;
    }

    periodDao.getAll(whereClause, function (error, rows) {
        if (error) {
            console.log('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.getPeriodById = function (req, res) {
    periodDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.insertPeriod = function (req, res) {
    periodDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data success inserted' + data.insertId, res);
    });
};

exports.updatePeriod = function (req, res) {
    periodDao.getById(req.body.id, function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.notfound('batch not found', res);
        } else {
            periodDao.update(req.body.id, req.body, function (err, data) {
                if (err) {
                    console.log('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.id, res);
            });
        }
    });
};