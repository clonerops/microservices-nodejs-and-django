require("dotenv").config();

import mongoose, { ConnectOptions } from "mongoose";

import { runServer } from "./src/api/server";
import { MONGODB_CONFIG } from "./config/inex";

function init() {
    mongoose
        .connect(`${process.env.MONGO_URL}`, MONGODB_CONFIG as ConnectOptions)
        .then(() => {
            console.log("MongoDB Conected!!!");
        })
        .then(() => {
            runServer();
        })
        .catch((e) => {
            console.log(e);
        });
}

init();
