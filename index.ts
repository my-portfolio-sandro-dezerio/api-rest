import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import routes from "./routes";
import Error from "./models/Error.model";

require("dotenv").config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(routes);

app.use((req, res, next: NextFunction) => {
	const error: Error = new Error('not found');
	error.status = 404;
	next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	res
		.status(500)
		.json({
		error: {
			message: error.message
		}
	});
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
