const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ContentRoute = require("./../routes/ContentRoute.js");
const ProfileRoute = require("./../routes/ProfileRoute.js");
const ProjectRoute = require("./../routes/ProjectRoute.js");

dotenv.config();

const port = process.env.APP_PORT || 8080;
const app = express();

// Middleware CORS
app.use(cors());

// Routes
app.use(ContentRoute);
app.use(ProfileRoute);
app.use(ProjectRoute);

// Root Route
app.get("/", (req, res) => res.send("Express on Vercel"));

// Server Listen
app.listen(port, () => console.log(`The server runs on... http://localhost:${port}`));

module.exports = app;