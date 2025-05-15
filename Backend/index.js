import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";  
import fishdataRoutes from "./routes/fishdata.js";
import plantdataRoutes from "./routes/plantdata.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());  
app.use(
    cors({
        origin: ["http://localhost:1000"],
        credentials: true,
    })
);

// API Routes
app.use("/fishdata", fishdataRoutes);
app.use("/plantdata", plantdataRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log("❌ MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});

export default app;
