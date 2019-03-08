const {
    Batch
} = require('../db/sequelize'); //nama batch diambil dari sequelize module exports


exports.getById = function getById(id, callback) {
    Batch.findById(id)
        .then((batch) => {
            return callback(null, batch);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(callback) {
    Batch.findAll()
        .then((batchs) => {
            return callback(null, batchs);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    Batch.create(data)
        .then((batch) => {
            return callback(null, batch);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    Batch.update(data, {
            where: {
                batch_id: data.batch_id
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

exports.del = function del(id, callback) {
    Batch.destroy({
            where: {
                batch_id: id
            }
        })
        .then(id => {
            return callback(null, id);
        })
        .catch((error) => {
            return callback(error);
        })
};