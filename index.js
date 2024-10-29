const express = require("express");
const morgan = require("morgan");
const pg = require("pg");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const db = new pg/.Client({
    host: "localhost",
    port: 5432,
    database: "finance_tracker",
    user:"postgres",
    password: "giri@2328"
})

db.connect().then(()=>{
    console.log("vaa da mapla");
})



const app =express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello World!");
})

app.post("/add",async(req,res)=>{
    const data = req.body;
    await db.query('INSERT INTO histroy(description, mode, amount)
            Values($1,$2,$3)' ,
            [data.description, data.mode, data.amount]);
    res.status(201).send("Record Inserted!");
})
app.listen(3001, ()=>{
    console.log('Server started at PORT 3001');
})