module.exports = (sequelize, type) => {
    return sequelize.define('studyperiod', {
        week_id: {
            field: 'week_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        tableName: 'study_period',
        timestamps: false
    })
}