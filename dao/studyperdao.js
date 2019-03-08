const {
    StudyPeriod
} = require('../db/sequelize');


exports.getById = function getById(id, callback) {
    StudyPeriod.findById(id)
        .then((studyper) => {
            return callback(null, studyper);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(callback) {
    StudyPeriod.findAll()
        .then((studypers) => {
            return callback(null, studypers);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    StudyPeriod.create(data)
        .then(studyper => {
            return callback(null, studyper)
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    StudyPeriod.update(data, {
            where: {
                week_id: data.week_id
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
    StudyPeriod.destroy({
            where: {
                week_id: id
            }
        })
        .then(id => {
            return callback(null, id);
        })
        .catch((error) => {
            return callback(error);
        })
};