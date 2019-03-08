module.exports = (sequelize, type) => {
    return sequelize.define('trainer', {
        trainer_id: {
            field: 'trainer_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            field: 'first_name',
            type: type.STRING
        },
        last_name: {
            field: 'last_name',
            type: type.STRING
        },
        email: {
            field: 'email_phone',
            type: type.STRING
        },
        active_flag: {
            field: 'active_flag',
            type: type.ENUM('0', '1')
        }
    }, {
        tableName: 'trainer',
        timestamps: false
    })
}