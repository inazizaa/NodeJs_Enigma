const Sequelize = require('sequelize');
const BatchModel = require('../model/bootcamp_batch');
const MateriModel = require('../model/bootcamp_material');
const PeriodModel = require('../model/bootcamp_period');
const StudyMatModel = require('../model/study_material');
const ScoreModel = require('../model/trainee_score');
const TraineeModel = require('../model/trainee');
const TrainerModel = require('../model/trainer');
const StudyPerModel = require('../model/study_period');

const sequelize = new Sequelize('enigma', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Batch = BatchModel(sequelize, Sequelize)
const Trainee = TraineeModel(sequelize, Sequelize)
const Material = MateriModel(sequelize, Sequelize)
const Periode = PeriodModel(sequelize, Sequelize)
const StudyPeriod = StudyPerModel(sequelize, Sequelize)
const StudyMaterial = StudyMatModel(sequelize, Sequelize)
const Score = ScoreModel(sequelize, Sequelize)
const Trainer = TrainerModel(sequelize, Sequelize)

Trainee.belongsTo(Batch, {
    foreignKey: 'batch_id',
    targetKey: 'batch_id'
});
// -------------------------------------
Periode.belongsTo(Batch, {
    foreignKey: 'batch_id',
    targetKey: 'batch_id'
});
Periode.belongsTo(StudyPeriod, {
    foreignKey: 'week_id',
    targetKey: 'week_id'
});
// -------------------------------------
Material.belongsTo(StudyMaterial, {
    foreignKey: 'material_id',
    targetKey: 'material_id'
});
Material.belongsTo(Periode, {
    foreignKey: 'bootcamp_period_id',
    targetKey: 'id'
});
Material.belongsTo(Trainer, {
    foreignKey: 'trainer_id',
    targetKey: 'trainer_id'
});
// -------------------------------------
Score.belongsTo(Trainee, {
    foreignKey: 'traineeId',
    targetKey: 'trainee_id'
});
Score.belongsTo(Material, {
    foreignKey: 'materialId',
    targetKey: 'id'
})


module.exports = {
    Batch,
    Trainee,
    Periode,
    StudyPeriod,
    Material,
    StudyMaterial,
    Score,
    Trainer
}