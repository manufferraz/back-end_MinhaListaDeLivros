require("dotenv").config();
const routes = require('./routes');
const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const port = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(port, () => {
    console.log("Server listening on port " + port);
});