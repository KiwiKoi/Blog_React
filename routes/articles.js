const router = require("express").Router();
let Article = require("../models/article.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const contents = req.body.contents;
  const author = req.body.author;
  const newArticle = new Article({ title, contents, author });

  newArticle
    .save()
    .then(() => res.json("Article added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
