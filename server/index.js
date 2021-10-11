const Sequelize = require("sequelize");
const sequelize = new Sequelize("sequelize-practice", "root", "amansultan", {
    dialect: "mysql"
})

const User = sequelize.define("users", {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21
    },
    isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
},
    { freezeTableName: true }
)

User.sync({ alter: true }).then((data) => { console.log("Model Synced With Tables") })
    .catch((e) => { console.log("Model not Synced With Tables", e) })

sequelize.authenticate().then(() => {
    console.log("Connection Established, App is Running")
}).catch(e => {
    console.log("Db Connection error " + e)
})