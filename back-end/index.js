import express from "express";
import mongoose from "mongoose";
import suggestionPost from "./suggestionPost.js";
import Cors from "cors";

const app = express();
app.use(express.json());
app.use(Cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! from nodemon");
});

app.post("/post/create", (req, res) => {
  const suggestion = req.body;
  suggestionPost.create(suggestion, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/post/allposts", (req, res) => {
  suggestionPost.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
