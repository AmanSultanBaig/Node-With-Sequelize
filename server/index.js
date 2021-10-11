const Sequelize = require("sequelize");
const sequelize = new Sequelize("sequelize-practice", "root", "amansultan", {
    dialect: "mysql"
})

sequelize.authenticate().then(success => {
    console.log("Connection Established, App is Running")
}).catch(e => {
    console.log("Db Connection error " + e)
})