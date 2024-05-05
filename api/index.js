const express = require("express");
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(port, () => console.log(`The server runs on... http://localhost:${port}`));

module.exports = app;