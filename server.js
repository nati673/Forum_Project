require("dotenv").config();
const pool = require('./server/config/database');
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const userRouter = require('./server/api/users/user.router');
const askRouter = require("./server/api/question/question.router");
const answer = require("./server/api/answer/answer.router")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter)
app.use("/api/question", askRouter);
app.use("/api/answer/", answer);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));