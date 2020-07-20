const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
  },
  contents: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
