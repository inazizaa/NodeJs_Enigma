module.exports = (sequelize, type) => {
    return sequelize.define('materialboot', {
        id: {
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        periodeId: {
            field: 'bootcamp_period_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'periode',
                key: 'periodeId'
            }
        },
        materialId: {
            field: 'material_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'studymaterial',
                key: 'weekId'
            }
        },
        trainerId: {
            field: 'trainer_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'trainer',
                key: 'trainerId'
            }
        },
        description: {
            field: 'description',
            type: type.STRING
        },
        active_flag: {
            field: 'active_flag',
            type: type.ENUM('1', '0')
        }
    }, {
        tableName: 'bootcamp_material',
        timestamps: false
    })
}