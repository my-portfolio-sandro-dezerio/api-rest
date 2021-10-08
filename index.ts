import express from "express";
import bodyParser from "body-parser";

import routes from './routes';

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use(routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
