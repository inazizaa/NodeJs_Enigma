const {
    Score,
    Trainee,
    Material
} = require('../db/sequelize');

exports.getById = function getById(id, callback) {
    Score.findById(id)
        .then((score) => {
            return callback(null, periode);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(whereClause, callback) {
    Score.findAll({
            where: whereClause,
            include: [Trainee, Material]
        })
        .then((scores) => {
            return callback(null, scores);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    Score.create(data)
        .then(score => {
            return callback(null, score)
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    Score.update(data, {
            where: {
                score_id: data.score_id
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