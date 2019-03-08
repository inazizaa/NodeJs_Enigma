module.exports = (sequelize, type) => {
    return sequelize.define('periode', {
        id: {
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        batchId: {
            field: 'batch_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'bootcamp_batch',
                key: 'batchId'
            }
        },
        weekId: {
            field: 'week_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'studyperiod',
                key: 'weekId'
            }
        },
        description: {
            field: 'description',
            type: type.STRING
        },
        active_flag: {
            field: 'active_flag',
            type: type.ENUM('0', '1')
        }
    }, {
        tableName: 'bootcamp_period',
        timestamps: false
    })
}