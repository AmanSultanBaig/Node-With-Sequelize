const express = require("express");
const app = express();
require("dotenv").config()

// db connection
require("./config/db_config")

app.get("/", (req, res) => {
    res.send("WELCOME TO PROJECT")
})

let portNo = 9000 || process.env.PORT

app.listen(portNo, () => console.log(`App is Running On port ${portNo}`))