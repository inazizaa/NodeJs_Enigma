var response = require('../model/res');
var studymatDao = require('../dao/studymatdao');

exports.studymaterials = function (req, res) {
    studymatDao.getAll(function (error, rows) {
        if (error) {
            console.log('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.getstudymaterialById = function (req, res) {
    studymatDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.insertstudymaterial = function (req, res) {
    studymatDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data success inserted' + data.insertId, res);
    });
};

exports.updatestudymaterial = function (req, res) {
    studymatDao.getById(req.body.material_id, function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.notfound('batch not found', res);
        } else {
            studymatDao.update(req.body.material_id, req.body, function (err, data) {
                if (err) {
                    console.log('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.material_id, res);
            });
        }
    });
};