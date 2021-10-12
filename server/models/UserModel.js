module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            defaultValue: 21
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        { freezeTableName: true }
    )
}

