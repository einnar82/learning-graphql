import mongoose from "mongoose";

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;
