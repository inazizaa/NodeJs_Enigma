const {
    Material,
    StudyMaterial,
    Trainer,
    Periode
} = require('../db/sequelize');


exports.getById = function getById(id, callback) {
    Material.findById(id)
        .then((material) => {
            return callback(null, material);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(whereClause, callback) {
    Material.findAll({
            where: whereClause,
            include: [StudyMaterial, Trainer, Periode]
        })
        .then((materials) => {
            return callback(null, materials);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    Material.create(data)
        .then(material => {
            return callback(null, material)
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    Material.update(data, {
            where: {
                material_id: data.material_id
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