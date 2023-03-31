const express = require("express");
const { productModel } = require("../model/product.model")

const productRouter = express.Router()

productRouter.get("/", async (req, res) => {
try{
    const products = await productModel.find({})
    res.status(200).json({ products })
}
 catch (error) {
    console.log(error)
    res.send(error)
}
   


})
productRouter.post("/addconstruction", async (req, res) => {
    const payload = req.body
    const note = new productModel(payload)
    await note.save()
    res.send("product Created")

})
// productRouter.patch("/update/:id", async (req,res) => {
//     const noteID = req.params.id
//     await productModel.findByIdAndUpdate({_id:noteID})
//     res.send({"msg":"Note with id has been updated"})
// })

// productRouter.delete("/delete/:id", async (req,res) => {
//     const noteID = req.params.id
//     await productModel.findByIdAndDelete({_id:noteID})
//     res.send({"msg":`Note with id  ${noteID} has been delted`})
// })
module.exports = {
    productRouter
}