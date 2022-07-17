const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/database.js")
const User = require("./db/User");
const Product = require("./db/Product");


dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

connectDB();


app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
})


app.post("/login", async (req, resp) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user);
        } else {
            resp.send({ result: 'No user found' });
        }
    }
})








app.post("/add-product", async(req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
})

app.get("/products", async(req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products)
    } else {
        resp.send({result:"No products found"});
    }
})


app.delete("/product/:id", async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
    console.log(result)
})





const PORT = process.env.PORT || 5000
app.get("/", (req, resp) => {
    resp.send(`App is working on port: ${PORT}`)
})

app.listen(PORT, console.warn(`Server is running on port: ${PORT}`))