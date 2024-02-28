import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
    img: String,
    gameName: String,
    desc: String,
    url: String
})

const Games = mongoose.model("Games", gameSchema);
export default Games;