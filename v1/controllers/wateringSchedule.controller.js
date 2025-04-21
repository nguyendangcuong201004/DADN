const WateringSchedule = require("../models/wateringSchedule.model")

module.exports.index = async (req, res) => {

    const schedules = await WateringSchedule.find();

    res.json({
        code: 200,
        message: "success",
        schedules: schedules
    })
}