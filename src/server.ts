import express from "express";
import { config } from "./config/config";
import { connectToDatabase } from "./infrastructure/database/mongodb.connection";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import authRouter from "./presentation/routes/authroutes";

const app = express();
const port = config.server.port;
const allowedOrigins = config.allowedOrigins || ["http://localhost:5173"];

app.use(bodyParser.json({ limit: "150mb" }));
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET,PUT,PATCH,POST,DELETE"],
    credentials: true,
  })
);
app.use(helmet());

app.use("/api/auth",authRouter)

// Connect to MongoDB and start the server
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  });
