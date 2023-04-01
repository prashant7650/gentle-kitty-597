const express = require("express");
const { pharmaModel } = require("../model/pharma.model")

const pharmaRouter = express.Router()

pharmaRouter.get("/", async (req, res) => {
try{
    const pharma= await pharmaModel.find({})
    res.status(200).json({ pharma })
}
 catch (error) {
    console.log(error)
    res.send(error)
}
   


})
pharmaRouter.post("/addpharma", async (req, res) => {
    const payload = req.body
    const note = new pharmaModel(payload)
    await note.save()
    res.send(" pharma product Created")

})

module.exports = {
    pharmaRouter
}