module.exports = (sequelize, type) => {
    return sequelize.define('trainee', {
        trainee_id: {
            field: 'trainee_id',
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
            field: 'email',
            type: type.STRING
        },
        phone: {
            field: 'phone',
            type: type.INTEGER
        },
        address: {
            field: 'address',
            type: type.STRING
        },
        active_flag: {
            field: 'active_flag',
            type: type.ENUM('0', '1')
        },
        batchId: {
            field: 'batch_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'bootcamp_batch',
                key: 'batchId'
            }
        }
    }, {
        tableName: 'trainee',
        timestamps: false
    })
}