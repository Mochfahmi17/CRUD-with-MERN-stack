import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/crud_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("open", () => {
  console.log("Database Connected...");
});

app.use(route);

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
