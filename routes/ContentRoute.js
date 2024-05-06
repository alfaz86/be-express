const express = require("express")
const { getContent } = require("../controllers/ContentController")

const router = express.Router()

router.get("/content", getContent)

module.exports = router