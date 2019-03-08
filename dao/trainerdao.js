const {
    Trainer
} = require('../db/sequelize');


exports.getById = function getById(id, callback) {
    Trainer.findById(id)
        .then((trainer) => {
            return callback(null, trainer);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(callback) {
    Trainer.findAll()
        .then((trainers) => {
            return callback(null, trainers);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    Trainer.create(data)
        .then(trainer => {
            return callback(null, trainer)
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    Trainer.update(data, {
            where: {
                trainer_id: data.trainer_id
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
    Trainer.destroy({
            where: {
                trainer_id: id
            }
        })
        .then(id => {
            return callback(null, id);
        })
        .catch((error) => {
            return callback(error);
        })
};