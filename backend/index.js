import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"

import authRoutes from "./routes/auth.route.js"


import {connectDB} from "./db/connection.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

app.use(cors())

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

app.get("/",(req,res)=>{
    res.send("Hello World!!")
})


app.listen(PORT,()=>{
    connectDB()
    console.log("Server running on port "+PORT);
})