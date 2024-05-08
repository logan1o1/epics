import express, { json } from 'express';
import cors from 'cors';
import Users from './db/Users.js';
import Question from './db/Questions.js';
import Games from './db/Games.js';
import Feedbacks from './db/Feedback.js';
import dotenv from 'dotenv';
import generateTokenNsetCookies from './utility/generateToken.js';
import mongoose from 'mongoose';
import path from "path";


const app = express()

dotenv.config()
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');
      })
      .catch((err) => {
        console.log(err);
      });

    const __dirname = path.resolve();

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
    resp.send(result);
})

app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        const user = await Users.findOne(req.body).select("-password");
        if (user) {
            generateTokenNsetCookies(user._id, resp);
            const result = await user.save();
            resp.status(200).send(result);
        } else {
            resp.send({ result: "User not found" })
        }
    } else {
        resp.send({ result: "User not found" })
    }
})

app.get("/logout", async (req, res) => {
    try {
        res.clearCookie("access_token");
        res.status(204).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/questions", async (req, resp) => {
    const question = new Question(req.body);
    const result = await question.save();
    resp.send(result);
})

app.post("/postFeedback", async (req, resp) => {
    const { username, feedback } = req.body;

    const validUser = await Users.findOne({ username });
    if (!validUser) {
        resp.status(404).send({ result: "User not found" })
    } else {
        const userFeedback = new Feedbacks(req.body);
        try {
            if (userFeedback) {
                const result = await userFeedback.save();
                resp.send(result);
            }
        } catch (error) {
            console.log(error);
        }
    }
})

app.get("/getFeedback", async (req, resp) => {
    const feedback = await Feedbacks.find()
    if (feedback.length > 0) {
        resp.send(feedback)
    } else {
        resp.send({ result: "No feedback found" })
    }
})


app.get("/questions", async (req, resp) => {
    const questions = await Question.find()
    if (questions.length > 0) {
        resp.send(questions)
    } else {
        resp.send({ result: "No questions found" })
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
        resp.send({ result: "No questions found" })
    }
})

app.listen(4001, () => console.log("Server running on port 4001"));

app.use(express.static(path.join(__dirname, '/FrontEnd/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'FrontEnd', 'dist', 'index.html'))
})