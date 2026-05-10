import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function connectDB() {
    const connectionString = process.env.MONGO_CONNECTION_STRING;

    await mongoose.connect(connectionString);

    return mongoose.connection;
}

export default connectDB;
