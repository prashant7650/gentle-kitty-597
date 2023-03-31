const mongoose = require("mongoose")

const pharmaSchema = mongoose.Schema({
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
const pharmaModel= mongoose.model("pharma", pharmaSchema)

module.exports = {
    pharmaModel
}