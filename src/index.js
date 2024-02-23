const express = require("express");

const { PORT } = require("./config/index")
const connectDB = require("./config/db")

const apiRoutes = require("./routes/index");

async function setupAndStartServer() {
    await connectDB();

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use("/api", apiRoutes);

    app.listen(PORT, () => {
        console.log("App started at 3000");
    })
}

setupAndStartServer();