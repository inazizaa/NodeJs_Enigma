module.exports = (sequelize, type) => {
    return sequelize.define('score', {
        score_id: {
            field: 'score_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        traineeId: {
            field: 'trainee_id',
            type: type.INTEGER,
            onDelete: 'CASADE',
            references: {
                model: 'trainee',
                key: 'traineeId'
            }
        },
        materialId: {
            field: 'bootcamp_material_id',
            type: type.INTEGER,
            onDelete: 'CASADE',
            references: {
                model: 'materialboot',
                key: 'material'
            }
        },
        knowledge: {
            field: 'score_knowledge',
            type: type.DOUBLE
        },
        proactiveness: {
            field: 'score_proactiveness',
            type: type.DOUBLE
        },
        task: {
            field: 'score_proactiveness',
            type: type.DOUBLE
        },
        note: {
            field: 'notes',
            type: type.STRING
        },
        active_flag: {
            field: 'active_flag',
            type: type.ENUM('0', '1')
        }
    }, {
        tableName: 'trainee_score',
        timestamps: false
    })
}