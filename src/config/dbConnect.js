import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function connectDB() {

    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@personal-projects.ykzfenp.mongodb.net/library?appName=personal-projects`
    );

    return mongoose.connection;
}

export default connectDB;
