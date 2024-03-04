import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import './backend/db/config.js';
import Users  from './backend/db/Users.js';
import Question from './backend/db/Questions.js';
import Games from './backend/db/Games.js';


const app = express()
const corsOption = {
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption))
app.use(express.json());


app.post("/signup", async (req, resp) => {
    const user = new Users(req.body)
    let result = await user.save();
    result = result.toObject();
    resp.send(result);
})

app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await Users.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({result: "User not found"})
        }
    }else{
        resp.send({result: "User not found"})
    }
})

app.post("/questions", async (req, resp) => {
    const question = new Question(req.body);
    const result = await question.save();
    resp.send(result);
})

app.get("/questions", async (req, resp) => {
    const questions = await Question.find()
    if (questions.length > 0) {
        resp.send(questions)
    } else {
        resp.send({result: "No questions found"})
    }
})

app.post("/games", async (req, resp) => {
    const game = new Games(req.body)
    const result = game.save()
    resp.send(result)
})

app.get("/games", async (req, resp) => {
    const games = await Games.find()
    if (games.length > 0) {
        resp.send(games)
    } else {
        resp.send({result: "No questions found"})
    }
})

app.listen(4001)