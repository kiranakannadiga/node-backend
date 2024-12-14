import mongoose from "mongoose";

const connectDB = async() => {
    try {
        console.log(`Attempting to connect to Mongodb`)
        await mongoose.connect(process.env.DB_URL);
        console.log('connected to MongoDB!');
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB;