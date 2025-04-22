const express = require("express");
const router = express.Router();


const controller = require("../controllers/wateringSchedule.controller.js");


router.get("/", controller.index)  

router.post("/", controller.createSchedule)  

router.get("/:id", controller.detail)  


module.exports = router;