const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articletitle: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
  },
  articlebody: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
