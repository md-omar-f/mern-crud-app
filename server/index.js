import express from "express";
import Connect from "./database/db.js";
import dotenv from 'dotenv';
import Routes from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', Routes);

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;

Connect(userName, password);

app.listen(PORT, () => {console.log(`The app is listening on port ${PORT}`)});