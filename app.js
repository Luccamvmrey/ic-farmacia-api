import express from "express";
import path from "path";
import logger from "morgan";

import url from "url";
import { dirname } from "path";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
