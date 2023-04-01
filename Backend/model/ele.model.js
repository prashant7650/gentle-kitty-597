const mongoose = require("mongoose")

const eleSchema = mongoose.Schema({
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
const eleModel= mongoose.model("ele", eleSchema)

module.exports = {
    eleModel
}