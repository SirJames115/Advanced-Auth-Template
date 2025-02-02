import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import colors from "colors";
import authRoutes from "./routes/auth.route.js";

// Connect to MongoDB
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // allow all origins
    credentials: true, // allow cookies
  })
); // Enable cors for all routes

app.use(express.json()); // Middleware to parse JSON body
app.use(cookieParser()); //allows us to parse the incoming cookie

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

// //Test
app.get("/", (req, res) => {
  res.send("I am working. I hope you can see me!!!!!!!");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Listening on port ${PORT}`);
});
