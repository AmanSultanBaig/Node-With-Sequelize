// const Users = require("../models/UserModel")
const db = require("../models")
const Users = db.users

const addUser = async (req, res) => {
    // await Users.create({ name: "Aman", password: "123", age: 22 })
    res.json({ statue: true })
}

module.exports = {
    addUser
}