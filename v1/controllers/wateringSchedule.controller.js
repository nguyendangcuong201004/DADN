const WateringSchedule = require("../models/wateringSchedule.model")

module.exports.index = async (req, res) => {

    const schedules = await WateringSchedule.find();

    res.json({
        code: 200,
        message: "success",
        schedules: schedules
    })
}


module.exports.createSchedule = async (req, res) => {

    const time = req.body.time;
    const name = req.body.name;

    const record = new WateringSchedule({
        time: time,
        name: name
    })

    await record.save();

    res.json({
        code: 200,
        message: "success",
        data: record
    })
}


module.exports.detail = async (req, res) => {
    const id = req.params.id;
    const record = await WateringSchedule.findOne({
        _id: id,
    })
    res.json({
        code: 200,
        message: "success",
        data: record
    })
}