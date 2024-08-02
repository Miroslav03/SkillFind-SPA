const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const config = require("./config/config");

const PORT = 3030;
const app = express();
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);
app.use(express.json());


app.use(routes);

mongoose
    .connect("mongodb://localhost:27017/skillfind")
    .then(() => {
        console.log("DB is connected!");
        app.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}...`)
        );
    })
    .catch(() => console.log("Cannot connect DB!"));
