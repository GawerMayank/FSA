import express, { urlencoded } from "express";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";

const app = express();

//DB connection
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send(`Hello from server!`);
});
app.use("/api/v1/users", userRoutes);

//Start server
app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`);
});
