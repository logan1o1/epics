import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Feedbacks = mongoose.model("Feedbacks", feedbackSchema);
export default Feedbacks;