var response = require('../model/res');
var traineeDao = require('../dao/traineedao');

exports.trainees = function (req, res) {
    let whereClause = {};
    if (req.query.first_name) {
        whereClause.first_name = req.query.first_name;
    }
    if (req.query.last_name) {
        whereClause.last_name = req.query.last_name;
    }
    if (req.query.email) {
        whereClause.email = req.query.email;
    }
    if (req.query.phone) {
        whereClause.phone = req.query.phone;
    }
    if (req.query.address) {
        whereClause.address = req.query.address;
    }
    if (req.query.active_flag) {
        whereClause.active_flag = req.query.active_flag;
    }
    if (req.query.batchId) {
        whereClause.batchId = req.query.batchId;
    }


    traineeDao.getAll(whereClause, function (error, rows) {
        if (error) {
            console.log('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    });
};


exports.getTraineeById = function (req, res) {
    traineeDao.getById(req.params['id'], function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.insertTrainee = function (req, res) {
    traineeDao.insert(req.body, function (err, data) {
        if (err) {
            console.log('error call insert : ' + err);
            response.err(err, res);
        }
        response.ok('data success inserted' + data.insertId, res);
    });
};

exports.updateTrainee = function (req, res) {
    traineeDao.getById(req.body.trainee_id, function (err, data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.notfound('batch not found', res);
        } else {
            traineeDao.update(req.body.trainee_id, req.body, function (err, data) {
                if (err) {
                    console.log('error call update : ' + err);
                    response.err(error, res);
                }
                response.ok('updated data : ' + data.trainee_id, res);
            });
        }
    });
};

// exports.del = function (req, res) {
//     traineeDao.getById(req.params['id'], function (err, data) {
//         if (err) {
//             console.log('error call getById : ' + err);
//             response.err(err, res);
//         } else if (data == null) {
//             response.datanotfound('bath not found', res);
//         } else {
//             batchDao.del(req.params['id'], function (err, data) {
//                 if (err) {
//                     console.log('error call delete : ' + err);
//                     response.err(error, res);
//                 }
//                 response.ok(data, res);
//             });
//         }
//     });
// };