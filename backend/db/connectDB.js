// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     console.log("Mongo-uri: ", process.env.MONGO_URI);

//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected ${conn.connection.host}`);
//   } catch (error) {
//     console.error("Error connecting to MongoDB: ", error.message);
//     process.exit(1); //failure
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Check if the Mongo URI is set
    if (!process.env.MONGO_URI) {
      console.error("Error: MONGO_URI is not defined in environment variables")
        .rainbow;
      process.exit(1);
    }

    // Attempt connection
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Success log
    console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen);
  } catch (error) {
    // Log error and terminate process
    console.error(`Error connecting to MongoDB: ${error.message}`.rainbow);
    process.exit(1); // Exit with failure
  }
};
