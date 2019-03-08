const {
    Trainee,
    Batch
} = require('../db/sequelize');


exports.getById = function getById(id, callback) {
    Trainee.findById(id)
        .then((trainee) => {
            return callback(null, trainee);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(whereClause, callback) {
    Trainee.findAll({
            where: whereClause,
            include: [Batch]
        })
        .then((trainees) => {
            return callback(null, trainees);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    // let trainee = data;
    // if (trainee.bootcamp_batch == null) {
    //     res.json('batch tidak ada');
    // } else {
    //     if (trainee.batchId == null) {
    //         trainee.batchId = trainee.bootcamp_batch.batchId;
    //     }
    // }
    Trainee.create(data)
        .then(trainee => {
            return callback(null, trainee)
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    // let trainee = data;
    // if (trainee.bootcamp_batch == null && trainee.batch_id == null) {
    //     res.json('batch kosong');
    // } else {
    //     if (trainee.batch_id == null) {
    //         trainee.batch_id = trainee.bootcamp_batch.batchId;
    //     }
    // }
    Trainee.update(data, {
            where: {
                trainee_id: data.trainee_id
            },
            returning: true,
            plain: true
        })
        .then(data => {
            return callback(null, data);
        })
        .catch((error) => {
            return callback(error);
        })
};

// exports.del = function del(id, callback) {
//     Trainee.destroy({
//             where: {
//                 trainee_id: id
//             }
//         })
//         .then(id => {
//             return callback(null, id);
//         })
//         .catch((error) => {
//             return callback(error);
//         })
// };