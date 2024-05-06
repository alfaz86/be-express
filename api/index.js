const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const ProfileRoute = require("./../routes/ProfileRoute.js");

const port = process.env.APP_PORT || 8080;

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use(ProfileRoute);

app.listen(port, () => console.log(`The server runs on... http://localhost:${port}`));

module.exports = app;