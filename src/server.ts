import express from "express";
import { config } from "./config/config";
import { connectToDatabase } from "./infrastructure/database/mongodb.connection";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = config.server.port;

app.use(bodyParser.json({ limit: "150mb" }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET,PUT,PATCH,POST,DELETE"],
    credentials: true,
  })
);

// Connect to MongoDB and start the server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
