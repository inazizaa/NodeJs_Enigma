var response = require('../model/res');
var batchDao = require('../dao/batchdao');

exports.batchs = function (req, res) {
    batchDao.getAll(function (error, rows) {
        if (error) {
            console.log('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    });
};


exports.getBatchById = function (req, res) {
    batchDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.insertBatch = function (req, res) {
    batchDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data success inserted' + data.insertId, res);
    });
};

exports.updateBatch = function (req, res) {
    batchDao.getById(req.body.batch_id, function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.notfound('batch not found', res);
        } else {
            batchDao.update(req.body.batch_id, req.body, function (err, data) {
                if (err) {
                    console.log('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.message, res);
            });
        }
    });
};

exports.del = function (req, res) {
    batchDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('bath not found', res);
        } else {
            batchDao.del(req.params['id'], function (err, data) {
                if (err) {
                    console.log('error call delete : ' + err);
                    response.err(error, res);
                }
                response.ok(data, res);
            });
        }
    });
};