const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USERNAME,
    process.env.PASSWORD, {
        host: "localhost",
        dialect: "mysql",
        pool: { max: 5, min: 3 }
    })

sequelize.authenticate().then(() => {
    console.log("DB Connection Established!")
}).catch(e => {
    console.log("DB Connection Error! " + e)
})