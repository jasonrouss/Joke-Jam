import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  text: String,
  creator: String,
  category: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostJokes = mongoose.model("PostJokes", postSchema);

export default PostJokes;
