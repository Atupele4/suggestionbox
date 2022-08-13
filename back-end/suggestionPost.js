import mongoose from 'mongoose';
const db_url = `mongodb+srv://admin:dj5QZdtD6kZCKybs@cluster0.offmgfn.mongodb.net/?retryWrites=true&w=majority`;
await mongoose.connect(db_url);


const suggestionPost = mongoose.Schema({
    title: String,
    problem: String,
    suggestedSolution: String
},{ timestamps: true });

export default mongoose.model('suggestionpost',suggestionPost)