const express = require("express");
const app = express();
const routes = require("./routes/routes")
require("dotenv").config()

// db connection
require("./config/db_config")

app.use(express.json())
app.use("/api", routes)

app.get("/", (req, res) => {
    res.send("WELCOME TO PROJECT")
})

let portNo = 9000 || process.env.PORT

app.listen(portNo, () => console.log(`App is Running On port ${portNo}`))