const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./route/user.route")
const { userModel } = require("./model/user.model")
const { productRouter } = require("./route/product.route")
const { pharmaRouter } = require("./route/pharma.route")
const { eleRouter } = require("./route/ele.route")

const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("Home-Page")

})

app.use("/users", userRouter)

app.use("/products", productRouter)

app.use("/pharmas",pharmaRouter)

app.use("/eles",eleRouter)

app.get("/users", async (req, res) => {
    let query = req.query
    console.log(query)
    try {
        const users = await userModel.find(query)
        res.send(users)

    } catch (err) {
        res.send({ "msg": "cannot get the User", "error": err.message })

    }


})

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to DB")
    }
    catch (err) {
        console.log(err)
        console.log("Can not connected")

    }
    console.log(`Port runnig at ${process.env.port}`)

})