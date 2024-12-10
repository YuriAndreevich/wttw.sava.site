import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
import commentRoute from './routes/comments.js';
import { initializeChat } from './chat.js'; 
import { createServer } from 'http';
dotenv.config();

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set('strictQuery', true);

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'https://https://wttw.sava.site'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(fileUpload());
app.use(express.json());
app.use('/api/', express.static('uploads'));

// Routes
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);


initializeChat(server);

async function start() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Подключение к MongoDB успешно установлено');

        server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
    } catch (error) {
        console.error('❌ Ошибка подключения к MongoDB:', error);
    }
}

start();
