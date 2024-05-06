const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const cors = require("cors");
const corsOptions = require("./../lib/cors.js");
const ContentRoute = require("./../routes/ContentRoute.js");
const ProfileRoute = require("./../routes/ProfileRoute.js");
const ProjectRoute = require("./../routes/ProjectRoute.js");

const port = process.env.APP_PORT || 8080;

// Middleware CORS
app.use(cors(corsOptions));

// Routes
app.use(ContentRoute);
app.use(ProfileRoute);
app.use(ProjectRoute);

// Root Route
app.get("/", (req, res) => res.send("Express on Vercel"));

// Server Listen
app.listen(port, () => console.log(`The server runs on... http://localhost:${port}`));

module.exports = app;