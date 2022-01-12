const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: "localhost",
        dialect: "mysql",
        pool: { max: 5, min: 3 }
    })

sequelize.authenticate().then(() => {
    console.log("DB Connection Established!")
}).catch(e => {
    console.log("DB Connection Error! " + e)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./UserModel")(sequelize, DataTypes)

db.sequelize.sync({ force: false, alter: true }).then(() => {
    console.log("Tables are synchronized")
}).catch(e => {
    console.log("Error while synchronizing " + e)
})