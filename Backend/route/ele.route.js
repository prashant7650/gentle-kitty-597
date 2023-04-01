const express = require("express");
const { eleModel } = require("../model/ele.model")

const eleRouter = express.Router()

eleRouter.get("/", async (req, res) => {
try{
    const ele= await eleModel.find({})
    res.status(200).json({ele})
}
 catch (error) {
    console.log(error)
    res.send(error)
}
   


})
eleRouter.post("/addele", async (req, res) => {
    const payload = req.body
    const note = new eleModel(payload)
    await note.save()
    res.send(" electric and electronic product created ")

})

module.exports = {
    eleRouter
}