import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import allRoutes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 5500;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("MongoDb connected!!!");
  } catch (error) {
    console.log("con el siguiente error--->", error);
    process.exit(1); //<----code 1 which means we faced an error
  }
};

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(status).json({ message, stack: err.stack });
});

//routes
app.use("/api", allRoutes);

//error handler
app.use((req, res) => {
  const status = error.statusCode || 500;
  const message = error.message || "Internal server error";
  return res.status(status).json({ message, stack: err.stack });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
