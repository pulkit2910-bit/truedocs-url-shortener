import express from "express";

// import { PORT } from "./config/index.js";

import connectDB from "./config/db.js";

import apiRoutes from "./routes/index.js";

async function setupAndStartServer() {
    await connectDB();

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use("/api", apiRoutes);

    app.listen(3000, () => {
        console.log("App started at", 3000);
    })
}

setupAndStartServer();