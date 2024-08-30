import dotenv from "dotenv";

dotenv.config();

export const { PORT, MONGO_URI, CLIENT_SECRET_KEY } = process.env;
