const express = require("express")
const { getProject } = require("../controllers/ProjectController")

const router = express.Router()

router.get("/project", getProject)

module.exports = router