import express from "express";

import routes_person from './person';
import routes_document_type from './documentType';

const app = express();

app.use(routes_person);
app.use(routes_document_type);

export default app;