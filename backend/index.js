const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./db/database.js")
const User = require("./db/User");


dotenv.config()

const app = express();
app.use(express.json());

connectDB();


app.post("/register", async (req, resp)=>{
    let user = new User(req.body);
    let result = user.save();
    resp.send(req.body)
})






const PORT = process.env.PORT || 5000
app.get("/", (req, resp)=>{
    resp.send(`App is working on port: ${PORT}`)
})

app.listen(PORT, console.warn(`Server is running on port: ${PORT}`))