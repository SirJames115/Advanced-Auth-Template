import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import authRoutes from "./routes/auth.route.js";

// Connect to MongoDB
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

// //Test
// app.get("/", (req, res) => {
//   res.send("I am working. I hope you can see me!!!!!!!");
// });

app.listen(PORT, () => {
  // connectDB();
  console.log(`Server is Listening on port ${PORT}`);
});
