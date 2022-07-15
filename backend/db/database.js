const mongoose = require ('mongoose');

const url = `mongodb+srv://chrisdias2311:Kalvasai23@ecomm.xczkuz0.mongodb.net/e-commerce?retryWrites=true&w=majority`;

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;