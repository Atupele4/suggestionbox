import mongoose from 'mongoose';
const db_url = `mongodb+srv://admin:dj5QZdtD6kZCKybs@cluster0.offmgfn.mongodb.net/?retryWrites=true&w=majority`;
await mongoose.connect(db_url);


const storyboard = mongoose.Schema({
    title: String,
    post: String,
    status: Number,
    likes: Number
},{ timestamps: true });

export default mongoose.model('storyboard',storyboard)