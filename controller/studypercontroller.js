var response = require('../model/res');
var studyperDao = require('../dao/studyperdao');

exports.studypers = function (req, res) {
    studyperDao.getAll(function (error, rows) {
        if (error) {
            console.log('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.getstudyperById = function (req, res) {
    studyperDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.insertstudyper = function (req, res) {
    studyperDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data success inserted' + data.insertId, res);
    });
};

exports.updatestudyper = function (req, res) {
    studyperDao.getById(req.body.week_id, function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.notfound('batch not found', res);
        } else {
            studyperDao.update(req.body.week_id, req.body, function (err, data) {
                if (err) {
                    console.log('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.week_id, res);
            });
        }
    });
};