const express = require("express");
const app = express();

const { PORT } = require("./config/index")
const connectDB = require("./config/db")

async function setupAndStartServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log("App started at 3000");
    })
}

setupAndStartServer();