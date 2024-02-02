const express = require("express");
const Question = require("../models/question");
const router = express.Router();

router.post("/add", (req, res) => {
  data = req.body;
  question = new Question(data);
  question
    .save()
    .then((savedquestion) => {
      res.status(200).send(savedquestion);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
router.get("/getallqt", (req, res) => {
  Question.find()
    .then((questions) => {
      res.status(200).send(questions);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
