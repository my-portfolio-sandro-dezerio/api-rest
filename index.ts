import express from "express";
import bodyParser from "body-parser";

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
