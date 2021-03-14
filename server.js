const express = require("express");
const cors= require("cors")
const path = require("path")
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname,'build')))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"));
})

app.get("/api",(req,res)=>{
    res.send("Hello server is running from docker "+process.env.KEY+".")
})

app.listen(5000,()=>{
    console.log("Server is up and running");
})