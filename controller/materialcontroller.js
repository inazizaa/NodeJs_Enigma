var response = require('../model/res');
var materialDao = require('../dao/materialdao');

exports.materials = function (req, res) {
    let whereClause = {};
    if (req.query.id) {
        whereClause.id = req.query.id;
    }
    if (req.query.periodeId) {
        whereClause.periodeId = req.query.periodeId;
    }
    if (req.query.materialId) {
        whereClause.materialId = req.query.materialId;
    }
    if (req.query.trainerId) {
        whereClause.trainerId = req.query.trainerId;
    }
    if (req.query.description) {
        whereClause.description = req.query.description;
    }
    if (req.query.active_flag) {
        whereClause.active_flag = req.query.active_flag;
    }

    materialDao.getAll(whereClause, function (error, rows) {
        if (error) {
            console.log('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.getmaterialById = function (req, res) {
    materialDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.insertmaterial = function (req, res) {
    materialDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data success inserted' + data.insertId, res);
    });
};

exports.updatematerial = function (req, res) {
    materialDao.getById(req.body.id, function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.notfound('batch not found', res);
        } else {
            materialDao.update(req.body.id, req.body, function (err, data) {
                if (err) {
                    console.log('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.id, res);
            });
        }
    });
};