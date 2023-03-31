const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    img: String,
    name:String,
    type: String,
    price: Number,
    rating: Number


}
    , {


        versionKey: false
    })

// model for thee data
const productModel = mongoose.model("product", productSchema)

module.exports = {
    productModel
}