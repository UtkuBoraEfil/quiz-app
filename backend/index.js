import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const allowlist = [
  "http://127.0.0.1:5173",
  "http://127.0.0.1:3000",
  "http://localhost:5173",
];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(cors(corsOptionsDelegate));


app.listen(3000, () => {
  console.log("server is running on port" + port);
});