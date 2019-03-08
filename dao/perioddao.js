const {
    Periode,
    Batch,
    StudyPeriod
} = require('../db/sequelize');


exports.getById = function getById(id, callback) {
    Periode.findById(id)
        .then((periode) => {
            return callback(null, periode);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(whereClause, callback) {
    Periode.findAll({
            where: whereClause,
            include: [Batch, StudyPeriod]
        })
        .then((periodes) => {
            return callback(null, periodes);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    Periode.create(data)
        .then(periode => {
            return callback(null, periode)
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    Periode.update(data, {
            where: {
                id: data.id
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