const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const sequelize = new Sequelize(
    "sequelize-practice",
    "root",
    "amansultan", {
        dialect: "mysql"
    })

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

User.sequelize.sync({ force: true, alter: true })
// .then(() => {
//     // return User.create({
//     //     name: "Aman Sultan baig",
//     //     password: "123456",
//     //     age: 22,
//     //     isActive: false
//     // });
// }).then((data) => {
//     console.log(data)
// }).catch(e => {
//     console.log("sync error", e)
// })


// sequelize.authenticate().then(() => {
//     console.log("Connection Established, App is Running")
// }).catch(e => {
//     console.log("Db Connection error " + e)
// })