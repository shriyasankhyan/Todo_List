import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () =>{

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.2ai1xte.mongodb.net/?retryWrites=true&w=majority`
    
    mongoose.connect(MONGODB_URI, {useNewUrlParser : true});

    mongoose.connection.on('connected', () =>{
        console.log("DB connected successfully");
    });

    mongoose.connection.on('disconnected', () =>{
        console.log("DB disconnected");
    });

    mongoose.connection.on('error', () => {
        console.log("There is an error while connecting with the database ", error.message);
    });
}

export default Connection;