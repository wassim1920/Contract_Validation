import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import contratRoute from "./routes/contrat.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

// const db = process.env.MongoURI;
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/contrat", contratRoute );

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || " something went wrong! ";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = 5001;
app.listen(PORT, () => {
   connect();
  console.log(`connected on Port : ${PORT} `);
});
