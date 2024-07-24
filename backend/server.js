import express from "express"
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to MongoDB")
}).catch((err)=> {
    console.log(err)
})

const app = express()

const PORT = process.env.PORT || 777

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT )
})
