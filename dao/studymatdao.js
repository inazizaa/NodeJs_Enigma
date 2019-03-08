const {
    StudyMaterial
} = require('../db/sequelize');


exports.getById = function getById(id, callback) {
    StudyMaterial.findById(id)
        .then((studymaterial) => {
            return callback(null, studymaterial);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.getAll = function getAll(callback) {
    StudyMaterial.findAll()
        .then((studymaterials) => {
            return callback(null, studymaterials);
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.insert = function insert(data, callback) {
    StudyMaterial.create(data)
        .then(studymaterial => {
            return callback(null, studymaterial)
        })
        .catch((error) => {
            return callback(error);
        })
};

exports.update = function update(id, data, callback) {
    StudyMaterial.update(data, {
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

exports.del = function del(id, callback) {
    StudyMaterial.destroy({
            where: {
                material_id: id
            }
        })
        .then(id => {
            return callback(null, id);
        })
        .catch((error) => {
            return callback(error);
        })
};