const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const ContentRoute = require("./../routes/ContentRoute.js");
const ProfileRoute = require("./../routes/ProfileRoute.js");
const ProjectRoute = require("./../routes/ProjectRoute.js");

const port = process.env.APP_PORT || 8080;

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use(ContentRoute);
app.use(ProfileRoute);
app.use(ProjectRoute);

app.listen(port, () => console.log(`The server runs on... http://localhost:${port}`));

module.exports = app;