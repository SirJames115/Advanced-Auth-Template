import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;
const MAILTRAP_TOKEN = process.env.MAILTRAP_TOKEN;

console.log(MONGO_URI);
console.log(PORT);
console.log(JWT_SECRET);
console.log(NODE_ENV);
console.log(MAILTRAP_TOKEN);
