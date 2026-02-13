import mongoose from 'mongoose';
import {DatabaseConnectionError, InternalServerError} from '@/application/errors/index.js';

export const connectDB = async () => {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
        throw new InternalServerError();
    }

    try {
        await mongoose.connect(mongoUrl);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err);
        throw new DatabaseConnectionError();
    }
};
