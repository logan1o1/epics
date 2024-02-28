import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
    ques: String,
    A: String,
    B: String,
    C: String
})

const Question = mongoose.model("Question", questionSchema);
export default Question;