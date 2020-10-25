import express from "express";
import mongoose from "mongoose";
import config from "./config";
import morgan from "morgan";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";

// Routes
import postRouter from "./routes/api/post";
import userRouter from "./routes/api/user";
const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));

app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB 연결 성공!"))
  .catch((e) => console.log(e));

// Use Routes

app.get("/");
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
export default app;
