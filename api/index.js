const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const ProfileRoute = require("./../routes/ProfileRoute.js");
const getAllTableNames = require("../lib/database.js");

const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/db", (req, res) => {
    const db_url = process.env.DATABASE_URL || "empty";
    res.send("Database: " + db_url);
});
app.get("/db/all", getAllTableNames);
app.use(ProfileRoute);

app.listen(port, () => console.log(`The server runs on... http://localhost:${port}`));

module.exports = app;