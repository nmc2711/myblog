import express from "express";
import mongoose from "mongoose";
import config from "./config";
import morgan from "morgan";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";

// Routes
import postRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credentials: true }));
//cors 메인 또는 포트가 다른 서버의 자원을 요청하는 매커니즘 origin all,credentials respon 헤더추가
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
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

export default app;
