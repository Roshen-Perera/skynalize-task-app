import express from 'express';
import cors from 'cors';
import taskRoutes from "./routes/task-routes";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:8081",  // Allow frontend requests
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true
}));

app.use('/task',taskRoutes);

app.listen(3000, (err => {
    console.log("Server running on port 3000");
}));

app.use('/health', (req, res, next) => {
    res.status(200).send('API is functional');
})
